<template>
    <div class="details-content">
        <div class="card header">
            <h2>
                Résultats trouvés
                <span>(2450)</span>
            </h2>
            <div class="row">
                <div class="row sort-by">
                    <p>Trier par:</p>
                    <select name="" id="">
                        <option value="">Pertinence</option>
                        <option value="">Date</option>
                        <option value="">Popularité</option>
                    </select>
                </div>
                <div class="show-selector">
                    <button class="active"><i class="fa-solid fa-list"></i></button>
                    <button><i class="fa-solid fa-border-all"></i></button>
                </div>
            </div>
        </div>
        <div class="content">
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
            <DataCard/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataCard from './DataCard.vue';

export default defineComponent({
    setup() {
        
    },
    components: {
        DataCard
    }
})
</script>

<style lang="scss" scoped>
.details-content {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    width: 100%;
    height: 75vh;
}
.header{
    padding: 10px;
    background-color: var(--light-color);
    width: 100%;
    height: 90px;
    margin: 0;

    h2{
        display: flex;
        font-size: 1.2rem;
        color: var(--dark-color);
        align-items: center;

        span{
            margin-left: 5px;
            font-size: 1rem;
            font-weight: 400;
            color: var(--light-dark-color);
        }
    }

    .sort-by{
        display: flex;
        flex-direction: row;
        align-items: center;

        p{
            width: 70px;
            font-size: 1rem;
            color: var(--light-dark-color);
        }

        select{
            border: none;
            font-weight: 600;
            background: none;
            border-radius: 5px;
            padding: 10px;
            font-size: 0.9rem;
        }
    }

    .show-selector{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: #ebebeb;
        padding: 5px;
        border-radius: 5px;

        button{
            background-color: #ebebeb;
            color: var(--dark-color);
            border: none;
            border-radius: 5px;
            padding: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;

            &.active{
                background-color: var(--dark-color);
                color: var(--light-color);
            }

            &:hover{
                background-color: var(--light-color);
                color: var(--dark-color);
            }
        }
    }
}

.content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    border-radius: 10px;
    margin: 5px 5px 5px 0;
    gap: 10px;
    padding: 5px;
    // background-color: var(--light-color);
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &:hover{
        &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 5px;
        }
    }
}
</style>