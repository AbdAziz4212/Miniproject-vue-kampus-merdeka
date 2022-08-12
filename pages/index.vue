<template>
  <div>
    <Bannerhome />
    <v-container>
      <Whysection />
      <div id="city-section" class="my-16">
        <div class="text-h4 text-center font-weight-medium ma-5 mb-8">Most Accessible City</div>
        <v-row>
          <v-col 
            v-for="(city, index) in getCities"
            :key="index"
            cols="12" 
            sm="12" 
            md="3"
          >
            <Cityitem :city="city" />
          </v-col>
        </v-row>
      </div>
      <div class="my-16"></div>
      <div id="testimoni-section" class="my-16">
        <div class="text-h4 text-center font-weight-medium ma-16 mb-8">What Customer are saying</div>
        <v-row>
          <v-col
            v-for="(comment, index) in getTestimonials"
            :key="index" 
            cols="12" 
            sm="12" 
            md="4"
          >
            <Commentitem :comment="comment" />
          </v-col>
        </v-row>
      </div>
      <Phonesection />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'landingPage',
  head: {
    title: 'Carpo'
  },
  computed: {
    getCities() {
      const city = this.$store.state.home.cities
      return city
    },
    getTestimonials() {
      const city = this.$store.state.home.testimonials
      return city
    }
  },
  mounted () {
    this.getFetchCity()
    this.getFetchTesti()
  },
  methods: {
    getFetchCity () {
      this.$store.dispatch('home/getFetchCities')
    },
    getFetchTesti () {
      this.$store.dispatch('home/getFetchTesti')
    }
  }
}
</script>

<style scoped>
.v-main {
  background-color: white;
}
</style>
