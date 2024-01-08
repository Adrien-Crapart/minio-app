<template>
    <div class="help-data">
        <h2>Contribuer</h2>
        <p>Vous souhaitez contribuer au portail Opendata, nous partager une découverte sur une nouvelle source de donnée ?</p> 
        <p>Remplissez-nous ce formulaire et nous ferons le reste.</p>
        <p><strong>Merci pour votre aide précieuse !</strong></p>

        <form id="dataForm">
            <label for="website">Site Web:</label><br>
            <input type="url" id="website" name="website" placeholder="https://data.grandparissud.fr/explore/?sort=modified" required><br>

            <label for="scaleMap">Échelle de la carte:</label><br>
            <select name="scaleMap" id="scaleMap">
                <option value="region">Région</option>
                <option value="department">Département</option>
                <option value="commune">Commune</option>
            </select><br>

            <label for="regions" id="regionsLabel">Sélectionnez une ou plusieurs régions :</label><br>
            <select id="regions" name="regions" multiple>
                <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
                <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
                <option value="Bretagne">Bretagne</option>
                <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                <option value="Corse">Corse</option>
                <option value="Grand Est">Grand Est</option>
                <option value="Hauts-de-France">Hauts-de-France</option>
                <option value="Île-de-France">Île-de-France</option>
                <option value="Normandie">Normandie</option>
                <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                <option value="Occitanie">Occitanie</option>
                <option value="Pays de la Loire">Pays de la Loire</option>
                <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
            </select><br>

            <label for="departments" id="departmentsLabel" class="hide">Sélectionnez un ou plusieurs départements :</label><br>
            <select id="departments" name="departments" class="hide" multiple>
                <option value="01">01 - Ain</option>
                <option value="02">02 - Aisne</option>
                <option value="03">03 - Allier</option>
                <option value="04">04 - Alpes-de-Haute-Provence</option>
                <option value="05">05 - Hautes-Alpes</option>
                <option value="06">06 - Alpes-Maritimes</option>
                <option value="07">07 - Ardèche</option>
                <option value="08">08 - Ardennes</option>
                <option value="09">09 - Ariège</option>
                <option value="10">10 - Aube</option>
                <option value="11">11 - Aude</option>
                <option value="12">12 - Aveyron</option>
                <option value="13">13 - Bouches-du-Rhône</option>
                <option value="14">14 - Calvados</option>
                <option value="15">15 - Cantal</option>
                <option value="16">16 - Charente</option>
                <option value="17">17 - Charente-Maritime</option>
                <option value="18">18 - Cher</option>
                <option value="19">19 - Corrèze</option>
                <option value="21">21 - Côte-d'Or</option>
                <option value="22">22 - Côtes-d'Armor</option>
                <option value="23">23 - Creuse</option>
                <option value="24">24 - Dordogne</option>
                <option value="25">25 - Doubs</option>
                <option value="26">26 - Drôme</option>
                <option value="27">27 - Eure</option>
                <option value="28">28 - Eure-et-Loir</option>
                <option value="29">29 - Finistère</option>
                <option value="30">30 - Gard</option>
                <option value="31">31 - Haute-Garonne</option>
                <option value="32">32 - Gers</option>
                <option value="33">33 - Gironde</option>
                <option value="34">34 - Hérault</option>
                <option value="35">35 - Ille-et-Vilaine</option>
                <option value="36">36 - Indre</option>
                <option value="37">37 - Indre-et-Loire</option>
                <option value="38">38 - Isère</option>
                <option value="39">39 - Jura</option>
                <option value="40">40 - Landes</option>
                <option value="41">41 - Loir-et-Cher</option>
                <option value="42">42 - Loire</option>
                <option value="43">43 - Haute-Loire</option>
                <option value="44">44 - Loire-Atlantique</option>
                <option value="45">45 - Loiret</option>
                <option value="46">46 - Lot</option>
                <option value="47">47 - Lot-et-Garonne</option>
                <option value="48">48 - Lozère</option>
                <option value="49">49 - Maine-et-Loire</option>
                <option value="50">50 - Manche</option>
                <option value="51">51 - Marne</option>
                <option value="52">52 - Haute-Marne</option>
                <option value="53">53 - Mayenne</option>
                <option value="54">54 - Meurthe-et-Moselle</option>
                <option value="55">55 - Meuse</option>
                <option value="56">56 - Morbihan</option>
                <option value="57">57 - Moselle</option>
                <option value="58">58 - Nièvre</option>
                <option value="59">59 - Nord</option>
                <option value="60">60 - Oise</option>
                <option value="61">61 - Orne</option>
                <option value="62">62 - Pas-de-Calais</option>
                <option value="63">63 - Puy-de-Dôme</option>
                <option value="64">64 - Pyrénées-Atlantiques</option>
                <option value="65">65 - Hautes-Pyrénées</option>
                <option value="66">66 - Pyrénées-Orientales</option>
                <option value="67">67 - Bas-Rhin</option>
                <option value="68">68 - Haut-Rhin</option>
                <option value="69">69 - Rhône</option>
                <option value="70">70 - Haute-Saône</option>
                <option value="71">71 - Saône-et-Loire</option>
                <option value="72">72 - Sarthe</option>
                <option value="73">73 - Savoie</option>
                <option value="74">74 - Haute-Savoie</option>
                <option value="75">75 - Paris</option>
                <option value="76">76 - Seine-Maritime</option>
                <option value="77">77 - Seine-et-Marne</option>
                <option value="78">78 - Yvelines</option>
                <option value="79">79 - Deux-Sèvres</option>
                <option value="80">80 - Somme</option>
                <option value="81">81 - Tarn</option>
                <option value="82">82 - Tarn-et-Garonne</option>
                <option value="83">83 - Var</option>
                <option value="84">84 - Vaucluse</option>
                <option value="85">85 - Vendée</option>
                <option value="86">86 - Vienne</option>
                <option value="87">87 - Haute-Vienne</option>
                <option value="88">88 - Vosges</option>
                <option value="89">89 - Yonne</option>
                <option value="90">90 - Territoire de Belfort</option>
                <option value="91">91 - Essonne</option>
                <option value="92">92 - Hauts-de-Seine</option>
                <option value="93">93 - Seine-Saint-Denis</option>
                <option value="94">94 - Val-de-Marne</option>
                <option value="95">95 - Val-d'Oise</option>
            </select><br>

            <label for="datasetsInfo">Informations sur les ensembles de données:</label><br>
            <input type="url" id="datasetsInfo" name="datasetsInfo" placeholder="https://data.grandparissud.fr/api/explore/v2.1/catalog/datasets?include_app_metas=true&lang=fr&limit=10&offset=10&order_by=modified+DESC&timezone=Europe%2FBerlin" required><br>

            <button type="button" onclick="addData()">Soumettre ma demande</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        
    },
    setup() {
    },
})
</script>


<style lang="scss" scoped>
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
    border-radius: 10px;
    border: none;
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