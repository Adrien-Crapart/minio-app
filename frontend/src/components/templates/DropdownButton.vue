<template>
  <div class="dropdown">
    <button class="dropdown-button" :style="{ backgroundColor: selectedColor }" @click="toggleDropdown">
      {{ selectedOption }}
    </button>
    <ul v-show="isDropdownOpen" class="dropdown-list">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: 'Sélectionner',
      selectedColor: '',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        // Add more options as needed
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.selectedColor = option.value;
      this.isDropdownOpen = false;
    },
  },
});
</script>

<style scoped>
/* Styling for the dropdown button */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Styling for the dropdown list */
.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}
</style>