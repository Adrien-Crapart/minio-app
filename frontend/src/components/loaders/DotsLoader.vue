<template>
   <section class="dots-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    </section>
</template>

<style>
.dots-container {
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
z-index: 3;
}
.dot {
height: 20px;
width: 20px;
margin-right: 10px;
border-radius: 10px;
background-color: #b3d4fc;
animation: pulse 1.5s
infinite ease-in-out;
}

.dot:last-child {
margin-right: 0;
}
.dot:nth-child(1) {
animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: #0e3bc0;
    box-shadow: 0 0 0 0 
    rgba(178, 212, 252, 0.7);
  }
  50% {
    transform: scale(.9);
    background-color: #00fffc;
    box-shadow: 0 0 0 5px 
    rgba(178, 212, 252, 0.325);
  }

  100% {
    transform: scale(0.8);
    background-color: #0e3bc0;

    box-shadow: 0 0 0 0
     rgb(18, 55, 97);
  }
}

/* -- YouTube Link Styles -- */

#source-link {
  top: 60px;
}

#source-link > i {
  color: rgb(94, 106, 210);
}

#yt-link {  
  top: 10px;
}

#yt-link > i {
  color: rgb(219, 31, 106); 

}

.meta-link {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;  
  display: inline-flex;
  gap: 5px;
  left: 10px;
  padding: 10px 20px;
  position: fixed;
  text-decoration: none;
  transition: background-color 600ms, border-color 600ms;
  z-index: 10000;
}

.meta-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.meta-link > i, .meta-link > span {
  height: 20px;
  line-height: 20px;
}

.meta-link > span {
  color: white;
  font-family: "Rubik", sans-serif;
  transition: color 600ms;
}

</style>