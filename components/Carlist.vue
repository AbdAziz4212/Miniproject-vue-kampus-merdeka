<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card class="grey lighten-5 rounded-xl" elevation="3" nuxt :to="`/car/${car.id}`">
        <v-img
          :aspect-ratio="16/9"
          lazy-src="../assets/volvoxs.png"
          :src="car.icon_image"
          gradient="to top right, rgba(100,115,201,.29), rgba(25,32,72,.7)"
          class="mx-auto"
          max-height="250"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out blue-grey lighten-1 v-card--reveal text-h2"
              style="height: 100%;"
            >
              Detail
            </div>
          </v-expand-transition>
        </v-img>
        <div class="pa-5">
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
        </div>
      </v-card>
    </v-hover>
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

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
