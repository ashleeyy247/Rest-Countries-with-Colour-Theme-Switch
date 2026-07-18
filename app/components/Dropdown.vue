<template>
  <div class="dropdown-container">
    <button class="dropbtn" @click="dropdownOpen = !dropdownOpen">
      {{ filterValue || "Select an Option" }}
      <Icon
        v-if="filterValue"
        icon="mdi:close"
        class="dropdown-icon"
        @click.stop="$emit('update:filterValue', '')"
      />
      <Icon v-else icon="mdi:chevron-down" class="dropdown-icon" />
    </button>

    <div class="dropdown-content" v-if="dropdownOpen">
      <div
        class="dropdown-options"
        v-for="dropdownOption in dropdownOptions"
        @click.prevent="
          () => {
            dropdownOpen = !dropdownOpen;
            $emit('update:filterValue', dropdownOption);
          }
        "
      >
        {{ dropdownOption }}
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: {
    filterValue: {
      required: true,
      type: String,
    },
    dropdownOptions: {
      type: Array,
      required: true,
    },
  },

  emits: ["update:filterValue"],
  data() {
    return {
      dropdownOpen: false,
    };
  },
};
</script>
<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}
.dropbtn {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  cursor: pointer;
  padding: 16px;
  border: none;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin-bottom: 4px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  padding: 8px 0;
}

/* Links inside the dropdown */
.dropdown-options {
  cursor: pointer;
  padding: 8px 16px;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-options:hover {
  background-color: #ddd;
  border-radius: 8px;
}

.dropdown-icon {
  width: 25px;
  height: 25px;
}
</style>
