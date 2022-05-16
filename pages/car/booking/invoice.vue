<template>
  <div> 
    <v-container class="text-center">
      <h1 class="mt-2">Invoice</h1>
      <div>
        Transfer to Virtual Account : 91281293182718319 
      </div>
      <Invoicecard :invoice="codeTrans" />
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InvoicePage',
  layout: 'landingPage',
  async asyncData({ route, store }) {
    /* eslint-disable no-console */
    console.log(store.state.order.code)
    const codeID = store.state.order.code
    const { data } = await axios.get('https://hopeful-serval-60.hasura.app/api/rest/invoice', { params: { _eq: codeID } })
    // console.log(data.carpo_transactions)
    return { codeTrans: data.carpo_transactions }
    /* eslint-enable no-console */
  },
  data: () => ({
    codeTrans: []
  }),
  head: {
    title: 'Booking'
  },
  computed: {
    codeInvoice() {
      const code = this.$store.state.order.code
      return code
    },
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
