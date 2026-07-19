<template>
  <div>
    <NavBar />

    <div class="content-container">
      <NuxtPage />
    </div>
  </div>
</template>
<style scoped>
.content-container {
  padding: 16px 64px;
}
@media (max-width: 768px) {
  .content-container {
    padding: 16px;
  }
}
</style>
