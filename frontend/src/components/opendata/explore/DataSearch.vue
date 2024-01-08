<template>
    <div class="card header">
        <h2>Retrouver des données ouvertes et réutilisables!</h2>
        <p>Explorer des centaines de données issues des plateformes régionales ou départementales.</p>
        <div class="search-data">
            <div class="search-input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Mots clés...">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="search-input">
                <i class="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="Commune, département ou région">
            </div>
            <button>Trouver la donnée</button>
        </div>
    </div>    
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100vh;
}
.header{
    justify-content: center;
    align-items: start;
    background-color: #fff;
    height: auto;
    padding: 20px;
    margin: 10px 10px 5px 10px;

    h2{
        font-size: 1.5rem;
        color: var(--dark-color);
        margin-bottom: 5px;
    }

    p{
        font-size: 1rem;
        color: var(--light-dark-color);
    }

    .search-data{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 10px;
        margin-top: 10px;

        .search-input{
            background-color: #e0e0e046;
            padding: 5px;
            border-radius: 8px;
            border: 1px solid #ddd;

            i{
                color: var(--dark-color);
                padding: 5px;
            }

            input[type="text"]{
                width: 250px;
                height: 30px;
                border: 0px solid #ddd;
                background: none;
                border-radius: 4px;
                padding: 5px;
                margin-right: 5px;
            
            }
        }

        button{
            padding: 13px;
            background-color: var(--dark-color);
            color: #fff;
            border-radius: 8px;
            border: 0px solid #ddd;
            cursor: pointer;
            font-weight: 600;
        }

        
    }


}

.card-content {
    padding: 20px;
    background: #fff;
}

.card-content p,
.card-content h2 {
    margin-bottom: 5px;
}

.card-content span {
    border-radius: 5px;
    padding: 2px 5px;
    color: #fff;
}

.card-content p.themes{
    display: flex;
    flex-wrap:wrap;
    gap: 2px;
}

.card-content p.themes span {
    background: #007bff;
}
.card-content p.services span {
    background: #929191;
}

.card-views {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    background-color: #f8f9fa;
}

.view-button {
    padding: 6px 12px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.view-button:hover {
    background-color: #0056b3;
}
</style>