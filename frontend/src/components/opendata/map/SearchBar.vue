<template>
    <div class="box">       
        <input type="text" placeholder="Rechercher une adresse...">
        <a href="#">
            <i class="fas fa-search"></i>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.box{
    position: absolute;
    right: 10px;
    top: 10px;
    height: 30px;
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
    background: #fff;
    border-radius: 30px;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.box:hover input{
    width: 400px;
}

.box input{
    width: 0;
    outline: none;
    border: none;
    font-weight: 500;
    transition: 0.8s;
    background: transparent;
}

.box a .fas{
    color: rgb(0, 0, 0);
    font-size: 18px;
}
</style>