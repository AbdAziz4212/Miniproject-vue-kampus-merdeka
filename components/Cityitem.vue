<template>
  <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="350">
    <v-img
      height="550"
      :src="city.image"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
    >
      <v-card-title class="font-weight-bold city-title">
        {{ city.city_name }}
        <v-spacer></v-spacer>
        <v-icon large dark>
          mdi-arrow-right
        </v-icon>
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'CityList',
  props: {
    city: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.city-title {
  letter-spacing: 6px;
}
</style>
