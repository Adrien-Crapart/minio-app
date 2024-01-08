<template>
    <div class="data-card">
        <div class="card-header">
            <h3>ADEME</h3>
            <p>
                <i class="fa-solid fa-calendar"></i>
                1an et 6jours
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </p> 
        </div>
        <div class="card-title">
            <h1>Cartographie 2023 des centres de lavage d'emballages en France</h1>
        </div>
        <div class="card-metadata">
            <div class="metadata integrated">
                <i class="fa-solid fa-circle-check"></i>
                <p>Intégré</p>
            </div>
            <div class="metadata database">
                <i class="fa-solid fa-database"></i>
                <p>Consolidée</p>
            </div>
            <div class="metadata localisation">
                <i class="fa-solid fa-location-dot"></i>
                <p>France</p>
            </div>
            <div class="metadata download">
                <i class="fa-solid fa-download"></i>
                <p>34973</p>
            </div>
        </div>
        
        <div class="card-content">
            <p>
                L’ADEME est un établissement public sous la tutelle conjointe du ministère de la Transition écologique et solidaire et du ministère de l’Enseignement supérieur, de la Recherche et de l’Innovation. Elle participe à la mise en œuvre des politiques publiques dans les domaines de l’environnement, de l’énergie et du développement durable.
            </p>
        </div>
        <div class="card-tags">
            <span>Environnement</span>
            <span>Emballage</span>
            <span>Cartographie</span>
        </div>
        <div class="card-views">
            <button class="view-button">Tableau</button>
            <button class="view-button">Analyse</button>
            <button class="view-button">Export</button>
            <button class="view-button">API</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
.data-card{
    display: flex;
    flex-direction: column;
    background-color: var(--light-color);
    border-radius: 10px;

    .card-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        h3{
            font-size: 0.7rem;
            color: var(--light-dark-color);
        }

        p{
            font-size: 0.8rem;
            color: var(--light-dark-color);
            display: flex;
            align-items: center;

            i{
                margin-right: 5px;
            }
        }

        i.fa-ellipsis-vertical{
            margin-left: 15px;
            font-size: 1rem;
            color: var(--dark-color);
            cursor: pointer;
        }
    }

    .card-title{
        padding: 0 10px 0 10px;

        h1{
            font-size: 1.2rem;
            color: var(--dark-color);
        }
    }
    .card-metadata{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        gap: 5px;

        .metadata{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;

            p,i{
                font-size: 0.8rem;
                color: var(--dark-color);
                font-weight: 600;
            }

            &.integrated{
                i,p{
                    color: #58d7f7;
                }
            }

            &.database{
                i,p{
                    color: var(--success-color);
                }
            }

            &.localisation{
                i,p{
                    color: var(--dark-color);
                }
            }

            &.download{
                background-color: #fdaaaa46;
                padding: 5px;
                border-radius: 5px;

                i,p{
                    color: var(--danger-color);
                }
            }
        }
    }
    .card-content{
        padding: 0 10px 5px 10px;

        p{
            font-size: 0.9rem;
            color: var(--light-dark-color);
        }
    }

    .card-tags{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        gap: 5px;

        span{
            font-size: 0.8rem;
            color: var(--dark-color);
            background-color: #d1d1d121;
            border-bottom: 1px solid #ddd;
            box-shadow: 0px 0px 2px #9b9b9b;
            padding: 5px;
            border-radius: 5px;
            font-weight: 500;
        }
    }

    .card-views{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        gap: 10px;

        button{
            background-color: var(--dark-color);
            color: var(--light-color);
            border: none;
            border-radius: 10px;
            padding: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;

            &:hover{
                background-color: var(--light-dark-color);
            }
        }
    }
}
</style>
