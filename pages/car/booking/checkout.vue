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
      <Checkoutcard :order="orderDetail" @payout="pay" />
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
      const myorder = this.$store.state.order.order
      return myorder.object
    },
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    pay () {
      const orderField = this.orderDetail
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
