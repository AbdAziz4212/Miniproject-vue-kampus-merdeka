<template>
  <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="350">
    <v-img
      height="550"
      lazy-src="https://images.unsplash.com/photo-1602183081720-3ff0403e87d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      :src="city.image"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
    >
      <v-card-title class="font-weight-bold city-title">
        {{ city.city_name }}
        <v-spacer></v-spacer>
        <v-icon large dark>
          mdi-check-circle
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
