<template>
  <h1>Service de réservation d'Hotel</h1>
  <input type="text" name="" id="">
  <table>
    <thead>
      <tr>
        <th>Nom de fichier</th>
        <th>Extension</th>
        <th>Dernière modification</th>
        <th>Taille</th>
        <th>Tags</th>
        <th>Prévisualiser</th>
        <th>Télécharger</th>
      </tr>
    </thead>
    <tbody>
      <td><input type="checkbox" name="" id="">002</td>
      <td>Chambre familiale</td>
      <td>
        <DropdownButton />
      </td>
      <td></td>
      <td></td>
      <td>
        <button>
           <IconPreview />
        </button>
      </td>
      <td>
        <button>
          <IconDownload />
        </button>
      </td>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DropdownButton from '@/components/DropdownButton.vue';
import IconDownload from '@/components/icons/IconDownload.vue';
import IconPreview from '@/components/icons/IconPreview.vue';

export default defineComponent({
  components: {
    DropdownButton,
    IconDownload,
    IconPreview
  },
});
</script>

<style scoped lang="scss">
* {
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    align-content: center;
    justify-content: left;
    max-width: 90%;
}
table {
    border-spacing: 1;
    border-collapse: collapse;
    background: #fff;
    border-radius: 10px;
    // overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;

    * {
      position: relative;
    }

    thead {
      border-radius: 20px;

      tr {
        height: 60px;
        background: #36304a;
        
        th {
            font-family: OpenSans-Regular;
            font-size: 18px;
            color: #fff;
            line-height: 1.2;
            font-weight: unset;
            text-align: center;
        }
      }
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;

        tr {
            height: 50px;
            font-family: OpenSans-Regular;
            font-size: 15px;
            color: gray;
            line-height: 1.2;
            font-weight: unset;

            &:nth-child(even) {
                background-color: #f5f5f5;
            }

            td {
              text-align: left;
            }
        }
    }
}
</style>
