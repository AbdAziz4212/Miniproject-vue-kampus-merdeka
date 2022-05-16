<template>
  <div>
    <v-card class="grey lighten-5 pa-5 rounded-xl" height="280" elevation="3" nuxt :to="`/car/${car.id}`">
      <v-img
        lazy-src="../assets/volvoxs.png"
        :src="car.icon_image"
        class="mx-auto"
        max-width="250"
        max-height="150"
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
        <v-col cols="12" xs="4" sm="4" md="4">
          <div class="text-center">
            <v-icon>mdi-speedometer</v-icon>
            {{ car.speed }}
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" xs="4" sm="4" md="4">
          <div class="text-center">
            {{ car.year }}
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="12" xs="4" sm="4" md="4">
          <div class="text-center text-subtitle-1">
            <v-icon>mdi-gas-station</v-icon>
            {{ car.fuel.fuel }}
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CarCArd',
  props: {
    car: {
      type: Object,
      required: true
    }
  }
}
</script>
