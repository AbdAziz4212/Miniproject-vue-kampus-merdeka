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
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>
            
            <v-col cols="12" md="2">
              <div class="pa-5">
                <div>
                  Transmission
                </div>
                <div>
                  <v-select
                    v-model="select"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="12" md="3">
              <div class="pa-5">
                <div>
                  Brand
                </div>
                <div>
                  <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    class="font-weight-bold text-h6"
                  ></v-select>
                </div>
              </div>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="12" md="2">
              <div class="pa-5">
                <div>
                  Type
                </div>
                <div>
                  <v-select
                    v-model="select"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
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
                >
                  Search
                </v-btn>  
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <div id="result-section" class="my-16">
        <v-row>
          <v-col
            v-for="(car, index) in getCars"
            :key="index"
            cols="12"
            sm="12"
            md="6"
            lg="4"
            xl="3"
          >
            <Carlist :car="car" />
          </v-col>
        </v-row>
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
  }),
  head: {
    title: 'Search Car'
  },
  computed: {
    getCars() {
      const cars = this.$store.state.search.cars
      return cars
    },
  },
  mounted () {
    this.getFetchCars()
  },
  methods: {
    getFetchCars () {
      this.$store.dispatch('search/getFetchCar')
    }
  }
}
</script>

<style scoped>
.v-main {
  background-color: #FAFAFA;
}
</style>
