<template>
  <v-row align="center">
    <v-col cols="12" sm="12" md="6" class="ma-0 pa-0">
      <v-card class="px-14 mt-sm-16 mt-md-16 mt-lg-0 mt-16" elevation="0">
        <div class="text-sm-h2 text-md-h2 text-lg-h1 text-h3 font-weight-bold mt-lg-n16">
          Premium
        </div>
        <div class="text-sm-h2 text-md-h2 text-lg-h1 text-h3 font-weight-bold">
          Car Rental
        </div>
        <div class="text-sm-h2 text-md-h2 text-lg-h1 text-h3 font-weight-bold">
          In Indonesia
        </div>
        <div class="text-subtitle-1">
          The First premium car in indonesia. Based on ratings and reviews from real users is the top-ranked car rental service company. If you are planning to rent a cor you can trust us.
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="6" class="ma-0">
      <div class="image-main">
        <v-img
          lazy-src="../assets/halfcar.png"
          src="../assets/halfcar.png"
        ></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BannerHome',
}
</script>
