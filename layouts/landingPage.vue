<template>
  <v-app id="inspire">
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
          v-for="(link, index ) in links"
          :key="index"
          nuxt
          :to="link.link"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
      <v-btn
        rounded
        color="darken-1 pa-5"
        dark
      >
        <v-icon class="mr-1">
          mdi-cloud-download
        </v-icon>
         Download Apps
      </v-btn>
      <!-- <v-btn
        rounded
        color="darken-1 pa-5 ma-2"
        dark
        nuxt
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        rounded
        color="darken-1 pa-5 ma-2"
        outlined
        nuxt
        to="/register"
      >
        Register
      </v-btn> -->
    </v-app-bar>

    <v-main>
        <Nuxt />
    </v-main>
  
    <v-footer
      absolute
      app
      padless
    >
      <v-card
        class="flex grey lighten-1"
        flat
        tile
      >
        <v-row no-gutters space-between>
          <v-col cols="12" sm="6" class="pa-10">
            <v-avatar
              class="mr-3"
              size="60"
            >
              <v-img
                contain
                max-height="60%"
                src="/assets/logocarpo.png"
              ></v-img>
            </v-avatar>
            <label class="font-weight-bold ma-0">Car</label><label class="font-weight-regular ma-0">po</label>
            <div class="subtitle-1 ml-4">First premium rental car in Indonesia</div>
          </v-col>
          <v-col cols="12" sm="3" class="pa-10">
            <div class="text-h6">About Us</div>
            <div v-for="about in aboutus" :key="about" class="subtitle-1">
              {{ about }}
            </div>
          </v-col>
          <v-col cols="12" sm="3" class="pa-10">
            <div class="text-h6">About Us</div>
            <div v-for="about in aboutus" :key="about" class="subtitle-1">
              {{ about }}
            </div>
          </v-col>
        </v-row>
        <v-card-title class="white">
          <div class="text-overline font-weight-medium">
            <v-icon class="mr-1">
              mdi-copyright
            </v-icon>
            CopyRight {{ new Date().getFullYear() }}
          </div>
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { name: 'Home' , link: '/' },
        { name: 'Cars' , link: '/search' },
        { name: 'Futures' , link: '/search' },
        { name: 'Help' , link: '/search' },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      aboutus: [
        'why Carpo',
        'Contact Us',
        'Partnership'
      ],
      fixed: false,
    }),
  }
</script>

<style scoped>
* {
  text-decoration: none;
}
.v-tabs {
  width: 50% !important;
}
</style>