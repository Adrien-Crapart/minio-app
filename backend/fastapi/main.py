import json
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from typing import List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from sqlalchemy import create_engine, Table, MetaData, Column, Integer, String, DateTime

# Utilisez l'URL de votre base de données
engine = create_engine('sqlite:///messages.db')
metadata = MetaData()

messages = Table('messages', metadata,
                 Column('id', Integer, primary_key=True),
                 Column('channel', String),
                 Column('user_id', String),
                 Column('message', String),
                 Column('timestamp', DateTime, default=datetime.utcnow),
                 )
metadata.create_all(engine)
app = FastAPI()


connected_users = {}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.websocket("/ws/{channel}/{user_id}")
async def websocket_endpoint(websocket: WebSocket, channel: str, user_id: str):
    await websocket.accept()
    if channel not in connected_users:
        connected_users[channel] = {}
    connected_users[channel][user_id] = websocket
    try:
        while True:
            data = await websocket.receive_text()
            with engine.connect() as connection:
                connection.execute(messages.insert().values(
                    channel=channel, user_id=user_id, message=data))
            for user, user_ws in connected_users[channel].items():
                if user != user_id:
                    await user_ws.send_text(data)
    except WebSocketDisconnect:
        del connected_users[channel][user_id]
        if len(connected_users[channel]) == 0:
            del connected_users[channel]
        await websocket.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
