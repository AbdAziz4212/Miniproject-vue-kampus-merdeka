<template>
  <div> 
    <v-container class="mt-10">
      <div id="input-section">
        <div class="text-h4">
          Detail Car
        </div>
        <v-btn
          color="blue-grey"
          class="white--text"
          outlined
          nuxt
          to="/search"
        >
          <v-icon
            dark
          >
            mdi-arrow-left-bold
          </v-icon>
            Back
        </v-btn>
        <Cardetail :car="car" />
      </div>

    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CarDetail',
  layout: 'landingPage',
  async asyncData({ route, params }) {
    const { data } = await axios.get('https://hopeful-serval-60.hasura.app/api/rest/vehicle-detail', { params: { id: params.id } })
    return { car: data.carpo_vehicle_by_pk }
  },
  data: () => ({
    car: []
  }),
  head: {
    title: 'Search Car'
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
