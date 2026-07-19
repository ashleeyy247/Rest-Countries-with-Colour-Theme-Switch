<template>
  <div class="card-container">
    <img class="country-img" :src="country.flags.png" />
    <div class="details-container">
      <div class="card-title">{{ country.name }}</div>
      <div class="card-description">
        <div><b>Population: </b>{{ formatNumber(country.population) }}</div>
        <div><b>Region: </b>{{ country.region }}</div>
        <div><b>Capital: </b>{{ country.capital }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatNumber } from "~/utils/formatNumber";
export default {
  props: ["country"],
  data() {
    return {};
  },
  methods: {
    formatNumber,
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: var(--shadow);
}
.card-container:hover {
  cursor: pointer;
  box-shadow:
    0 4px 8px 0 var(--elements),
    0 6px 16px 0;
}
.card-title {
  margin: 16px 0;
  font-weight: 800;
  font-size: 16px;
}
.card-description {
  line-height: 24px;
}
.details-container {
  padding: 16px 24px;
  margin-bottom: 16px;
}
.country-img {
  max-width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
}
</style>
