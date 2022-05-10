<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-0">
        <Carouselcar />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-16">
        <Registerform />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
    }
  },
  head: {
    title: 'Register'
  },
}
</script>

<style scoped>
.city-title {
  letter-spacing: 4px;
}
.v-main {
  background-color: white;
}
</style>
