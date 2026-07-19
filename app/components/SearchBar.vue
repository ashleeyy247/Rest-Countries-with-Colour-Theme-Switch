<template>
  <div class="search-container">
    <Icon icon="mdi:magnify" class="search-icon" />
    <input
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="search"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
};
</script>
<style scoped>
.search-container {
  position: relative;
  display: flex;
  align-items: center;
}
input {
  color: var(--text);
  background-color: var(--elements);
  width: 100%;
  border-radius: 4px;
  height: 50px;
  border: none;
  padding: 8px 32px 8px 64px;
  box-shadow: var(--shadow);
}
input::placeholder {
  font-family: "Nunito Sans", sans-serif;
  color: var(--text);
}
.search-icon {
  color: var(--text);
  width: 20px;
  height: 20px;
  position: absolute;
  left: 24px;
}
@media (max-width: 600px) {
  .search-container,
  .dropbtn {
    width: 100%;
  }
}
</style>
