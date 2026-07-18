<template>
  <div class="menu-container">
    <SearchBar v-model="query" :placeholder="'Search for country'" />

    <Dropdown
      v-model:filter-value="filterRegion"
      :dropdown-options="dropdownOptions"
    />
  </div>
  <div class="country-container">
    <CountryCard
      v-for="country in computedCountryData"
      :country="country"
      :key="country.name"
      @click="redirectTo(country.name)"
    />
  </div>
</template>

<script>
import countryData from "~/assets/data/data.json";
export default {
  data() {
    return {
      countryData: countryData,
      query: "",
      filterRegion: "",
      dropdownOptions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    };
  },
  methods: {
    redirectTo(countryName) {
      this.$router.push({
        name: "country-name",
        params: { name: countryName },
      });
    },
  },
  computed: {
    computedCountryData() {
      if (this.filterRegion && this.query) {
        return this.countryData.filter(
          (country) =>
            country.region == this.filterRegion &&
            country.name.includes(this.query),
        );
      } else if (this.filterRegion) {
        return this.countryData.filter(
          (country) => country.region == this.filterRegion,
        );
      } else {
        return this.countryData.filter((country) =>
          country.name.includes(this.query),
        );
      }
    },
  },
};
</script>
<style scoped>
.menu-container {
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
}
.country-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 64px;
}
</style>
