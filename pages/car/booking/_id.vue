<template>
  <div> 
    <v-container class="mt-10">
      <div id="input-section">
        <div class="text-h4">
          Booking Order
        </div>
        <v-btn
          color="blue-grey"
          class="white--text"
          outlined
          @click="goBack"
        >
          <v-icon
            dark
          >
            mdi-arrow-left-bold
          </v-icon>
            Back
        </v-btn>
      </div>
      <v-row>
        <v-col cols="12" sm="12" md="2" lg="3">
          <Bookingcar :car="car" />
        </v-col>
        <v-col cols="12" sm="12" md="10" lg="9">
          <Bookinginput />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BookingCar',
  layout: 'landingPage',
  data: () => ({
    car: {}
  }),
  head: {
    title: 'Search Car'
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
