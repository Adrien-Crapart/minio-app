<template>
    <div class="loader">
        <div class="loader-item"></div>
        <div class="loader-item"></div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    position: relative;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader-item{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 15px solid #454ade;
    border-radius: 50%;
    animation: loader 1.2s ease-out infinite;

    &:nth-child(2) {
        animation-delay: 1.6s;
    }
}
@keyframes loader {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>