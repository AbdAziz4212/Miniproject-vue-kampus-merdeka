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
            
            <v-col cols="12" md="3">
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
            v-for="(car, index) in cars"
            :key="index"
            cols="12"
            md="3"
          >
            <v-card class="grey lighten-5 pa-5 rounded-xl" elevation="3" to="/car/1">
              <v-img
                :src="car.image"
                class="mx-auto"
              ></v-img>
              <div class="d-flex justify-space-between my-3">
                <div  class="font-weight-medium text-h5">
                  {{ car.name }}
                </div>
                <div class="text-subtitle-2">
                  <div>${{ car.price }}<span class="text-caption">/Day</span></div>
                </div>
              </div>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="text-center">
                    <v-icon>mdi-speedometer</v-icon>
                    {{ car.speed }}
                  </div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" md="4">
                  <div class="text-center">
                    {{ car.year }}
                  </div>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" md="4">
                  <div class="text-center">
                    <v-icon>mdi-gas-station</v-icon>
                    {{ car.fuel }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
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
    cars: [
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
      { name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvoxs.png' },
    ]
  }),
  head: {
    title: 'Search Car'
  },
}
</script>

<style scoped>
.v-main {
  background-color: #FAFAFA;
}
</style>
