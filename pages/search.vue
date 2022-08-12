<template>
  <div> 
    <v-container class="mt-10">
      <div id="input-section">
        <div class="text-h3">
          Search Car 
        </div>
        <v-card
          elevation="3"
          class="pa-5 mt-5 rounded-xl"
        >
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="3">
              <div class="pa-5">
                <div>
                  Location
                </div>
                <div>
                  <v-select
                    v-model="citySelected"
                    :items="allCities"
                    item-text="city_name"
                    item-value="id"
                    label="Select"
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>
            
            <v-col cols="12" sm="12" md="2">
              <div class="pa-5">
                <div>
                  Transmission
                </div>
                <div>
                  <v-select
                    v-model="transmisionSelected"
                    :items="allTransmission"
                    item-text="transmission"
                    item-value="id"
                    label="Select"
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="12" sm="12" md="2">
              <div class="pa-5">
                <div>
                  Brand
                </div>
                <div>
                  <v-select
                    v-model="brandSelected"
                    :items="allBrand"
                    item-text="brand"
                    item-value="id"
                    label="Select"
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="12" sm="12" md="2">
              <div class="pa-5">
                <div>
                  Type
                </div>
                <div>
                  <v-select
                    v-model="typeSelected"
                    :items="allType"
                    item-text="name_type"
                    item-value="id"
                    label="Select"
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="2">
              <div class="pa-5">
                <v-btn
                  block
                  dark
                  elevation="2"
                  large
                  x-large
                  class="pa-10"
                  :loading="loading"
                  @click="searchData"
                >
                  Search
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="1">
              <div class="pa-5">
                <v-btn
                  dark
                  elevation="2"
                  class="pa-3"
                  :loading="loading2"
                  @click="resetSearch"
                >
                  Reset
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <div v-if="message" class="text-center red--text">
            all search fields must be filled
          </div>  
        </v-card>
      </div>
      <div id="result-section" class="my-16">
        <div v-if="getCars">
          <v-row>
            <v-col
              v-for="(car, index) in getCars"
              :key="index"
              cols="12"
              sm="12"
              md="6"
              lg="3"
            >
              <Carlist :car="car" />
            </v-col>
          </v-row>
        </div>
        <div v-if="!getCars.length" class="text-center">
          <div class="text-h3">no suitable data</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  layout: 'landingPage',
  data: () => ({
    select: { state: 'Florida', abbr: 'FL' },
    items: [
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ],
    searchCars: [],
    allCities: [],
    allTransmission: [],
    allBrand: [],
    allType: [],
    citySelected: '',
    transmisionSelected: '',
    brandSelected: '',
    typeSelected: '',
    message: false,
    loading: false,
    loading2: false,
  }),
  head: {
    title: 'Search Car'
  },
  computed: {
    getCars() {
      const cars = this.$store.state.search.cars
      return cars
    },
    getSearchData() {
      const data = this.$store.state.search.regencies
      return data
    },
  },
  mounted () {
    this.getFetchCars()
    this.getDataSearch()
  },
  methods: {
    getFetchCars () {
      this.$store.dispatch('search/getFetchCar')
    },
    getDataSearch () {
      this.$store.dispatch('search/getAllSearchData')
      this.allCities = this.$store.state.search.regencies
      this.allTransmission = this.$store.state.search.transmision
      this.allBrand = this.$store.state.search.brand
      this.allType = this.$store.state.search.type
    },
    searchData () {
      this.loading = !this.loading
      const searchData = {
        city: (this.citySelected) ? this.citySelected : null ,
        transmision: (this.transmisionSelected) ? this.transmisionSelected : null,
        brand: (this.brandSelected) ? this.brandSelected : null,
        type: (this.typeSelected) ? this.typeSelected : null
      }
      this.$store.dispatch('search/getCarsBySearchOther', searchData )
      setTimeout(() => (this.loading = !this.loading), 3000)
    },
    resetSearch () {
      this.loading2 = !this.loading2
      this.citySelected = ''
      this.transmisionSelected = ''
      this.brandSelected = ''
      this.typeSelected = ''
      setTimeout(() => (this.loading2 = false), 3000)
      this.getFetchCars()
    }
  }
}
</script>

<style scoped>
.v-main {
  background-color: #FAFAFA;
}
</style>
