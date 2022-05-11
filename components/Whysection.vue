<template>
  <div id="why-section" class="my-16">
      <div class="text-h4 text-center font-weight-medium ma-5 mb-8">Why Choose Us</div>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
            <v-img
              max-width="150"
              lazy-src="../assets/rocket.svg"
              src="../assets/rocket.svg"
              class="mx-auto"
            ></v-img>
            <div  class="ma-4 font-weight-medium text-h5">
              Fast & Easy Booking
            </div>
            <div>
              Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
            <v-img
              max-width="150"
              lazy-src="../assets/maps.svg"
              src="../assets/maps.svg"
              class="mx-auto"
            ></v-img>
            <div  class="ma-4 font-weight-medium text-h5">
              Many Location
            </div>
            <div>
              Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
            <v-img
              max-width="200"
              lazy-src="../assets/rate.svg"
              src="../assets/rate.svg"
              class="mx-auto"
            ></v-img>
            <div  class="ma-4 font-weight-medium text-h5">
              Satisfied Customer
            </div>
            <div>
              Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'WhySectionPage',
}
</script>
