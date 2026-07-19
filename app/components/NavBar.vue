<template>
  <div class="nav-container">
    <div class="title">
      {{ "Where in the world?" }}
    </div>
    <div class="mode-btn" @click="toggleTheme">
      <Icon v-if="theme == 'light'" icon="tabler:moon" class="icon" />
      <Icon v-else icon="solar:sun-bold-duotone" class="icon" />{{
        theme == "light" ? "Dark Mode" : "Light Mode"
      }}
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { useTheme } from "~/composables/useTheme";
export default {
  components: {
    Icon,
  },
  data() {
    const { theme, initTheme, toggleTheme } = useTheme();
    return {
      theme,
      initTheme,
      toggleTheme,
    };
  },
  mounted() {
    this.initTheme();
  },
};
</script>
<style scoped>
.nav-container {
  background-color: var(--elements);
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow);
}
.title {
  font-size: 16px;
  font-weight: 800;
}
.mode-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
}
.moon {
  width: 18px;
  height: 18px;
  padding-right: 8px;
}
@media (max-width: 768px) {
  .nav-container {
    padding: 16px;
  }
}
</style>
