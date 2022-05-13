<template>
  <div>
    <v-card
      elevation="1"
      class="my-16 rounded-xl"
    >
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            lazy-src="../assets/volvo.png"
            :src="car.detail_image"
            class="mx-auto"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-10">
          <v-row>
            <v-col cols="12" md="4" class="pa-5">
              <div>Name :</div>
              <div class="text-h5 font-weight-bold">{{ car.name }}</div>
            </v-col>
            <v-col cols="12" md="4" class="pa-5">
              <div>Type :</div>
              <div class="text-h5 font-weight-bold">{{ car.type.name_type }}</div>
            </v-col>
            <v-col cols="12" md="4" class="pa-5">
              <div>Year :</div>
              <div class="text-h5 font-weight-bold">{{ car.year }}</div>
            </v-col>
            <v-col cols="12" md="12" class="pa-5">
              <div>Description :</div>
              <div class="text-subtitle-1 font-weight-medium">
                {{ car.description }}
              </div>
            </v-col>
            <v-col cols="12" md="12" class="pa-5">
              <v-expansion-panels>
                <v-expansion-panel
                >
                  <v-expansion-panel-header>
                    Other Information
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" md="4" class="pa-5">
                        <div class="font-weight-bold">
                          <v-icon>mdi-account-multiple</v-icon> 8 Passenger
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="pa-5">
                        <div class="font-weight-bold">
                          <v-icon>mdi-car-door</v-icon> 4 Door
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="pa-5">
                        <div class="font-weight-bold">
                          <v-icon>mdi-car-cog</v-icon> {{ car.transmission.transmission }}
                        </div>
                      </v-col>
                      <v-col cols="12" md="12" class="pa-5">
                        <div class="font-weight-bold">
                          Features
                        </div>
                        <div>
                          <v-chip class="ma-2">Default</v-chip>
                          <v-chip class="ma-2">Default</v-chip>
                          <v-chip class="ma-2">Default</v-chip>
                          <v-chip class="ma-2">Default</v-chip>
                          <v-chip class="ma-2">Default</v-chip>
                          <v-chip class="ma-2">Default</v-chip>
                        </div>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <div class="pa-5 text-right">
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              x-large
              nuxt
              :to="`/car/booking/${car.id}`"
            >
              <div>${{ car.price }} <span class="text-caption">/Day</span> </div>
              <v-icon
                right
                dark  
                class="mx-2"
              >
                mdi-arrow-right-circle
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DetailOfCar',
  props: {
    car: {
      type: Object,
      required: true
    }
  }
}
</script>
