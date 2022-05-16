<template>
  <div>
    <v-container>
      <h1>Checkout</h1>
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
      <!-- {{ orderDetail }} -->
      <Checkoutcard :order="orderDetail.object" @payout="pay" />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  layout: 'landingPage',
  data: () => ({
    order: {},
  }),
  head: {
    title: 'Checkout'
  },
  computed: {
    orderDetail() {
      const order = this.$store.state.order.order
      if(!order){
        this.$router.go(-1)
      }
      return order
    },
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    pay () {
      /* eslint-disable no-console */
      // console.log(this.orderDetail.object);
      /* eslint-enable no-console */
      const orderField = this.orderDetail.object
      this.$store.dispatch('order/ordertransaction', { object: orderField })
    }
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
