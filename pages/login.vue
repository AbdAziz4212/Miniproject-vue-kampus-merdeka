<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-16">
        <Loginform />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-0">
        <Carouselcar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
    }
  },
  head: {
    title: 'Login'
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
