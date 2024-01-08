<template>
    <div class="card filter-container">
        <div class="header">
            <div class="row">
                <h2>Filter</h2>
                <button>Réinitialiser</button>
            </div>      
            <h3>Catégorie</h3>
            <select name="" id="">
                <option value="">Toutes les catégories</option>
                <option value="">Mobilité et Espace Public</option>
                <option value="">Urbanisme et Logements</option>
                <option value="">Citoyenneté</option>
                <option value="">Equipements, Services, Social</option>
                <option value="">Administration et Finances Publiques</option>
                <option value="">Environnement</option>
                <option value="">Culture</option>
                <option value="">Commerces et Tourisme</option>
            </select>
        </div>
        <div class="filter-content">
            <h3>Territoire</h3>
            <ul>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer3">
                        <label for="layer3">Région</label>
                    </div>
                    <span>13</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer4">
                        <label for="layer4">Département</label>
                    </div>
                    
                    <span>101</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer5">
                        <label for="layer4">Commune</label>
                    </div>
                    <span>34973</span>
                </li>
            </ul>
        </div>
        <div class="filter-content">
            <h3>Année</h3>
            <ul>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer3">
                        <label for="layer3">2023</label>
                    </div>
                    <span>13</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer4">
                        <label for="layer4">2022</label>
                    </div>                   
                    <span>101</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer5">
                        <label for="layer4">2021</label>
                    </div>             
                    <span>34973</span>
                </li>
            </ul>
        </div>
        <div class="filter-content">
            <h3>Producteur</h3>
            <ul>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer3">
                        <label for="layer3">ENEDIS</label>
                    </div>
                    <span>6</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer4">
                        <label for="layer4">APUR</label>
                    </div>
                    <span>101</span>
                </li>
                <li>
                    <div class="details">
                        <input type="checkbox" id="layer5">
                        <label for="layer4">Ministère de l'écologie</label>
                    </div>  
                    <span>34973</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>

<style lang="scss" scoped>
.filter-container {
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 100%;
    margin: 0 5px 5px 10px;
    border-radius: 10px;
    background-color: var(--light-color);
    padding: 10px;
}
.header{
    padding: 10px;
    border-bottom: 1px solid #ddd;

    h2{
        font-size: 1.5rem;
        color: var(--dark-color);
        margin-bottom: 5px;
    }

    h3{
        font-size: 1rem;
        color: var(--dark-color);
        margin-bottom: 5px;
        font-weight: 600;
    }

    button{
        background-color: var(--dark-color);
        color: var(--light-color);
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
    }

    select{
        width: 100%;
        border: 1px solid #ddd;
        background: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 0.9rem;
        color: var(--dark-color);
    }
}
.filter-content{
    border-bottom: 1px solid #ddd;
    padding: 10px;

    h3{
        font-size: 1rem;
        color: var(--dark-color);
        margin-bottom: 5px;
        font-weight: 600;
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
        margin: 0;
        gap: 5px;
    }

    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        font-size: 0.9rem;
        justify-content: space-between;
    }

    input[type="checkbox"]{
        margin-right: 5px;
        accent-color: #080000;
    }

    span{
        display: flex;
        font-size: 0.6rem;
        background-color: #ebebeb;
        padding: 2px 3px;
        border-radius: 5px;
        color: #868686;
    }
}
</style>