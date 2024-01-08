export const users = [
  { id: '1', name: 'User 1', available: true },
  { id: '2', name: 'User 2', available: false },
];

export const messages = {
  '1': [
    { id: '1', text: 'Hello!', senderId: '2', createTime: '2023-01-01T10:30:00', userName: 'User 2' },
    { id: '2', text: 'Hi there!', senderId: '1', createTime: '2023-01-01T11:00:00', userName: 'User 1' },
    // Add more messages for user 1
  ],
  '2': [
    { id: '1', text: 'Hey!', senderId: '1', createTime: '2023-01-01T09:45:00', userName: 'User 1' },
    { id: '2', text: 'How are you?', senderId: '2', createTime: '2023-01-01T12:15:00', userName: 'User 2' },
    // Add more messages for user 2
  ],
  // Add more messages for other users
};