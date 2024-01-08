<template>
    <div id="tooltip">
        <span id="tooltip-text">Tooltip text</span>
        <span>Hover me</span>
    </div>
</template>

<style lang="scss" scoped>
#tooltip {
    position: relative;
    cursor: pointer;
    border-bottom: 2px dotted black;
    padding: 7px;
    font-size: 25px;
    font-weight: bold;
    font-family: sans-serif;
}

#tooltip-text {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
    background-color: black;
    color: #fff;
    white-space: nowrap;
    border-radius: 7px;
    padding: 10px 15px;  
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        border: 15px solid transparent;
        border-color: #000 #0000 #0000 #0000;
    }
}
#tooltip:hover #tooltip-text {
    top: -130%;
    visibility: visible;
    opacity: 1;
}
</style>