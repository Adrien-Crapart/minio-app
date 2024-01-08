<template>
    <div class="container search">
        <h3>RECHERCHER</h3>
        <h4>Trouver un jeu de données</h4>
        <div class="search-bar">
            <input type="text" id="dataset-search" placeholder="Rechercher un jeu de données...">
        </div>
        <div class="layer-group">
            <h4>Trier les données</h4>
            <div class="radio-buttons">
                <input type="radio" id="sortByUpdateDate" name="sortOption" value="updateDate" checked>
                <label for="sortByUpdateDate">Modifié</label>

                <input type="radio" id="sortByPopularity" name="sortOption" value="popularity">
                <label for="sortByPopularity">Populaires</label>

                <input type="radio" id="sortByAZ" name="sortOption" value="a-z">
                <label for="sortByAZ">A-Z</label>
            </div>
        </div>
        <div class="layer-group">
            <h4>Thèmes</h4>
            <ul>
                <li>
                    <img src="/src/components/opendata/icons/mobility.svg" alt="Mobilité et Espace Public">
                    <input type="checkbox" id="layer1"> Mobilité et Espace Public
                </li>
                <li>
                    <img src="/src/components/opendata/icons/urbanism.svg" alt="Urbanisme et Logements">
                    <input type="checkbox" id="layer2"> Urbanisme et Logements
                </li>
                <li>
                    <img src="/src/components/opendata/icons/citizenship.svg" alt="Citoyenneté">
                    <input type="checkbox" id="layer2"> Citoyenneté
                </li>
                <li>
                    <img src="/src/components/opendata/icons/services.svg" alt="Equipements, Services, Social">
                    <input type="checkbox" id="layer2"> Equipements, Services, Social
                </li>
                <li>
                    <img src="/src/components/opendata/icons/administration.svg" alt="Administration et Finances Publiques">
                    <input type="checkbox" id="layer2"> Administration et Finances Publiques
                </li>
                <li>
                    <img src="/src/components/opendata/icons/environment.svg" alt="Environnement">
                    <input type="checkbox" id="layer2"> Environnement
                </li>
                <li>
                    <img src="/src/components/opendata/icons/culture.svg" alt="Culture">
                    <input type="checkbox" id="layer2"> Culture
                </li>
                <li>
                    <img src="/src/components/opendata/icons/tourism.svg" alt="Commerces et Tourisme">
                    <input type="checkbox" id="layer2"> Commerces et Tourisme
                </li>
            </ul>
        </div>
        <div class="layer-group">
            <h4>Territoire</h4>
            <div id="map"></div>
            <ul>
                <li><input type="checkbox" id="layer3"> <label for="layer3">Région</label></li>
                <li><input type="checkbox" id="layer4"> <label for="layer4">Département</label></li>
                <li><input type="checkbox" id="layer5"> <label for="layer4">Commune</label></li>
            </ul>
        </div>
        <div class="layer-group">
            <h4>Année</h4>
            <ul>
                <li>
                    <select id="monthSelect" name="month">
                        <option value="1">Janvier</option>
                        <option value="2">Février</option>
                        <option value="12">Décembre</option>
                    </select>
                </li>
                <li>
                    Entre <input type="date" id="startDate" name="startDate" required>
                    et <input type="date" id="endDate" name="endDate" required>
                </li>
            </ul>
        </div>
        <div class="layer-group">
            <h4>Producteur</h4>
            <ul>
                <li><input type="checkbox" id="layer3"> <label for="layer3">Couche 3</label></li>
                <li><input type="checkbox" id="layer4"> <label for="layer4">Couche 4</label></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.navbar li, a, button {
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #24252A;
    padding: 10px 10%;
}

header a {
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: auto;
    cursor: pointer;
}

.logo{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.navbar {
    list-style: none;
}

.navbar ul {
    display: flex;
    flex-direction: row;
}

.navbar li {
    display: inline-block;
    padding: 0px 20px;
}

.navbar li a {
    transition: all 0.3s ease 0s;
}

.navbar li a:hover {
    color: #0088a9;
}

.navbar button {
    margin-left: 20px;
    padding: 9px 25px;
    background-color: rgba(0,136,169,1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}

.navbar button:hover {
    background-color: rgba(0,136,169,0.8);
}

.api-link button{
    padding: 10px 15px;
    color: black;
    border-radius: 5px;
    cursor: pointer;
}

.data{
    display: flex;
    flex-direction: row;
}

.container {
  display: flex;
}

.search{
    flex-direction: column;
    background: #fdfeff46;
    padding: 10px;
    width: 300px;
    display: flex;
}

.layer-group {
    flex-direction: column;
    margin-bottom: 20px;
}

.layer-group h4 {
    margin-bottom: 10px;
}

.layer-group li {
    display: flex;
    flex-direction: row;
    gap: 10px;
    line-height: normal;
    background: #d5dff1;
    margin: 5px;
    padding: 5px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
}

.layer-group input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}

.custom-checkbox {
    padding-left: 30px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 8px;
}

.custom-checkbox::before {
    content: '\2713';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    color: #007bff;
    visibility: hidden;
}


input[type="checkbox"]:checked + .custom-checkbox::before {
    visibility: visible;
}

li img {
    height: 30px;
    width: 30px;
}

.radio-buttons {
    display: flex;
    margin-top: 10px;
}

.radio-buttons input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.radio-buttons label {
    flex: 1;
    text-align: center;
    padding: 10px;
    background-color: #ddd;
    cursor: pointer;
}

.radio-buttons input:checked + label {
    background-color: #007bff;
    color: #fff;
}

.search-bar {
    margin-bottom: 10px;
}

#dataset-search {
    width: 280px;
    height: 30px; 
    border: #24252A 1px solid; 
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    padding: 20px;
}

.card {
    display: flex;
    flex-direction: row;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    max-width: 500px;
    height: 25vh;
    overflow: hidden;
}

.card-content {
    padding: 20px;
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

#map { height: 180px; }

.help-data {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px;
}

.help-data h2 {
    font-size: 50px;
}

.help-data p {
    font-size: 16px;
    margin-bottom: 10px;
}

#dataForm{
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#dataForm input,
#dataForm select{
    border: #7e7e7e 0.5px solid;
    width: 500px;
    height: 35px;
    margin-bottom: 15px;
}

#dataForm button{
    background: #007bff;
    width: 500px;
    height: 35px;
}

#dataForm select[multiple] {
    height: 250px !important;
}

.hide {
    display: none;
}

.table-toggle{
    display: flex;
    gap: 20px;
}
.table-toggle a{
    color: #fff;  
    background-color: #007bff;
    padding: 10px;
}

.table-toggle a:hover{
    color: #fff;  
    background-color: #0470e4;
    padding: 10px;
}

.table-card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 3, 0.3);
    width: 100rem;
}
</style>