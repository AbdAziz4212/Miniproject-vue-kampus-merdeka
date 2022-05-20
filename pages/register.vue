<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-0 d-none d-sm-none d-md-flex">
        <Carouselcar />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="ma-0 pa-16">
        <Registerform @regisInput="submitRegister" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  head: {
    title: 'Register'
  },
  methods: {
    submitRegister (data) {
      /* eslint-disable no-console */
      // console.log(data);
      /* eslint-enable no-console */
      this.$store.dispatch('home/insertDataRegister', data )
    }
  }
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
