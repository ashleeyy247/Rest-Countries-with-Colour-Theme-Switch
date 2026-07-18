<template>
  <button class="border-tiles back-btn" @click="goBack">
    <Icon icon="flowbite:arrow-left-outline" class="back-icon" /><span
      >Back</span
    >
  </button>
  <div class="container">
    <div class="flag-container">
      <img :src="selectedCountry.flags.png" />
    </div>
    <div class="detail-container">
      <div class="detail-title">
        {{ selectedCountry.name }}
      </div>
      <div class="info">
        <div>
          <p><b>Native Name</b>: {{ selectedCountry.nativeName }}</p>

          <p><b>Population</b>: {{ selectedCountry.population }}</p>

          <p><b>Region</b>: {{ selectedCountry.region }}</p>

          <p><b>Sub Region</b>: {{ selectedCountry.subregion }}</p>
          <p><b>Capital</b>: {{ selectedCountry.capital }}</p>
        </div>
        <div>
          <p>
            <b>Top Level Domain</b>:
            {{ selectedCountry.topLevelDomain.join(", ") }}
          </p>

          <p><b>Currencies</b>: {{ currencies.join(", ") }}</p>

          <p><b>Languages</b>: {{ languages.join(", ") }}</p>
        </div>
      </div>
      <div class="border-container">
        <p><b>Border Countries</b>:</p>
        <div class="border-content">
          <div class="border-tiles" v-for="border in borderCountryName">
            {{ border }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import countryData from "~/assets/data/data.json";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      selectedCountry: {},
      countryData: countryData,
    };
  },
  created() {
    this.selectedCountry = this.countryData.find(
      (country) => country.name == this.$route.params.name,
    );
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    currencies() {
      const currencyNames = [];
      this.selectedCountry.currencies.forEach((currency) =>
        currencyNames.push(currency.name),
      );
      return currencyNames;
    },
    languages() {
      const languageNames = [];
      this.selectedCountry.languages.forEach((lang) =>
        languageNames.push(lang.name),
      );
      return languageNames;
    },
    borderCountryName() {
      const borderCountryName = [];
      if (!this.selectedCountry) return;

      this.selectedCountry.borders.forEach((border) => {
        const countryName = this.countryData.find(
          (country) => country.alpha3Code == border,
        ).name;
        if (countryName) {
          borderCountryName.push(countryName);
        }
      });
      return borderCountryName;
    },
  },
};
</script>
<style scoped>
.container {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.detail-container {
  align-self: center;
}
.detail-title {
  font-size: 24px;
  font-weight: 800;
}
.flag-container img {
  width: 80%;
}
.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;

  margin-top: 16px;
}
.border-container {
  font-size: 16px;
  margin-top: 24px;
  display: flex;
}
.back-btn {
  width: 100px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  margin: 42px 0 64px 0 !important;
  cursor: pointer;
  border: none;
}
.border-content {
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
}
.border-tiles {
  align-self: center;
  text-align: center;
  padding: 8px;
  box-shadow: 1px 1px 1px 1px rgb(226, 225, 225);

  border-radius: 4px;
}
.back-icon {
  width: 20px;
  height: 20px;
}
</style>
