<template>
  <div>
    <v-card
      elevation="2"
      class="mt-12 pa-6 rounded-lg"
    >
      <v-card-title>
        <div>Order Data</div>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <div>Fullname</div>
            <div class="text-h6">{{ order.fullname }}</div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div>Phone</div>
            <div class="text-h6">{{ order.phone }}</div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div>Email</div>
            <div class="text-h6">{{ order.email }}</div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div>Order Date</div>
            <div class="text-h6">{{ order.order_date }}</div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div>Return Date</div>
            <div class="text-h6">{{ order.return_date }}</div>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <div>Duration</div>
            <div class="text-h6">{{ order.duration }} Day</div>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <div>Address</div>
            <div class="text-h6">{{ order.address }}</div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title>
        <div>Car</div>
      </v-card-title>
      <v-card-text>
        <div></div>
        <v-row>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="12" md="3">
                <div>Car Name</div>
                <div class="text-h6">{{ order.car.name }}</div>
              </v-col>
              <v-col cols="12" md="3">
                <div>Brand</div>
                <div class="text-h6">{{ order.car.brand.brand }}</div>
              </v-col>
              <v-col cols="12" md="3">
                <div>City</div>
                <div class="text-h6">{{ order.car.regency.city_name }}</div>
              </v-col>
              <v-col cols="12" md="3">
                <div>Transmission</div>
                <div class="text-h6">{{ order.car.transmission.transmission }}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="text-h5 font-weight-bold black--text d-flex justify-space-between">
        <div>
          <div>Total</div>
          <div class="text-subtitle-1">
            {{ order.duration }} Day x ${{ order.car.price }}
          </div>
          <div>${{ order.total }}</div>
        </div>
        <div>
          <div>Payment Method</div>
          <div class="text-subtitle-1">
            Transfer Virtual Account
          </div>
        </div>
        <div>
          <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            x-large
            @click="checkout"
          >
            <div>Pay</div>
            <v-icon
              right
              dark  
              class="mx-2"
            >
              mdi-arrow-right-circle
            </v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCards',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkout (){
      this.$emit('payout')
    }
  }
}
</script>
