<template>
  <div class="nav-container">
    <div class="title">
      {{ "Where in the world?" }}
    </div>
    <div class="mode-btn">
      <Icon icon="tabler:moon" class="moon" />{{ "Dark Mode" }}
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
<style scoped>
.nav-container {
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 4px rgb(226, 225, 225);
}
.title {
  font-size: 16px;
  font-weight: 800;
}
.mode-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.moon {
  width: 18px;
  height: 18px;
  padding-right: 8px;
}
</style>
