<template>
  <v-app id="inspire">
    <!-- <v-app-bar
      app
      color="white"
      flat
    >
      <img
        src="../static/assets/logo.png"
        alt="Logo Carpo"
        height="125"
        contain
        class="logo"
      >
      
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar> -->

    <v-app-bar
      app
      color="white"
      height="80"
      flat
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="60"
      >
        <v-img
          contain
          max-height="60%"
          src="/assets/logocarpo.png"
        ></v-img>
      </v-avatar>
      <v-toolbar-title class="p-0">
        <label class="font-weight-bold ma-0">Car</label><label class="font-weight-regular ma-0">po</label>
      </v-toolbar-title>

      <v-tabs
        centered
        class="ml-n6 w-50"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <!-- <v-btn
        rounded
        color="grey darken-3"
        dark
      >
        Login
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        rounded
        color="grey darken-3"
      >
        Register
      </v-btn> -->
      <v-btn
        rounded
        color="darken-1 pa-5"
        dark
      >
        <v-icon class="mr-1">
          mdi-cloud-upload
        </v-icon>
         Download Apps
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <v-container> -->
        <Nuxt />
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'About Us',
        'Cars',
        'Futures',
        'Help',
      ],
    }),
  }
</script>

<style scoped>
.v-tabs {
  width: 50% !important;
}
</style>