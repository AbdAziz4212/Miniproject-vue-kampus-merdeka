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
          <Bookinginput @resultInput="checkout" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookingCar',
  layout: 'landingPage',
  async asyncData({ route, params }) {
    const { data } = await axios.get('https://hopeful-serval-60.hasura.app/api/rest/vehicle-detail', { params: { id: params.id } })
    return { car: data.carpo_vehicle_by_pk }
  },
  data: () => ({
    car: []
  }),
  head: {
    title: 'Booking'
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    checkout (resultInput) {
      resultInput.car = this.car
      const randNo = Math.floor(Math.random() * 100) + 2 + "" + new Date().getTime() +  Math.floor(Math.random() * 100) + 2 + (Math.random().toString(36).replace(/[^a-zA-Z]+/g, '').substr(0, 5))
      resultInput.code = randNo
      const totalPrice = (this.car.price*resultInput.duration)
      resultInput.total = totalPrice
      this.$store.dispatch('order/saveInputOrder', { object: resultInput })
      this.$router.push({ name: 'car-booking-checkout' })
    }
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
