<template>
  <div class="loader">
    <div class="loader-item"></div>
    <div class="loader-item"></div>
    <div class="loader-item"></div>
</div>
</template>

<style scoped lang="scss">
.loader {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    perspective: 800px;
    z-index: 2;

  .loader-item {
    position:absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    }
}

.loader .loader-item {
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &:nth-child(1) {
    border-bottom: 6px solid #3a6bf1;
    transform: rotateX(35deg) rotateY(-45deg);
    animation: rotate-one 1s linear infinite;
    }


    &:nth-child(2) {
    border-right: 6px solid #4bc8eb;
    transform: rotateX(50deg) rotateY(10deg);
    animation: rotate-two 1s linear infinite;
    }

    &:nth-child(3) {
    border-top: 6px solid #c9c9c9;
    transform: rotateX(35deg) rotateY(55deg);
    animation: rotate-three 1s linear infinite;
    }
}

@keyframes rotate-one {
  to {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes rotate-two {
  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@keyframes rotate-three {
  to {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>