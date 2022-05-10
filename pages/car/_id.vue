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
        <Cardetail />
      </div>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CarDetail',
  layout: 'landingPage',
  data: () => ({
    car: { 
      name:'Volco XS', price:25, speed:'135', year:'2019', fuel:'Gasoline', image:'../assets/volvo.png' 
    }
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
