<template>
  <div>
    <v-card
      elevation="2"
      class="mt-10 rounded-lg"
    >
      <v-card-title>
        <div>Car Detail</div>
      </v-card-title>
      <v-img
        lazy-src="../../assets/volvo.png"
        :src="car.icon_image"
        class="mx-auto"
      ></v-img>
      <v-divider></v-divider>
      <div class="px-10">
        <v-card-title class="text-h6">
          {{ car.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ car.transmission.transmission }}
        </v-card-subtitle>
      </div>
      <div class="grey lighten-2">
        <div class="px-10">
          <v-card-text>
            <div>City</div>
            <div class="text-button">{{ car.regency.city_name }}</div>
            <div>Price</div>
            <div class="text-button">${{ car.price }}/day</div>
          </v-card-text>
        </div>
      </div>
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
