<template>
  <div id="phone-section" class="my-16">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-img
          contain
          :aspect-ratio="16/9"
          lazy-src="../assets/phone1.png"
          src="../assets/phone1.png"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <div class="pa-10">
          <div class="text-overline">
            CONVENTENT INTERACTION
          </div>
          <div class="text-h2 font-weight-bold my-7">
            MODERN APP
          </div>
          <div class="text-subtitle-1">
            We developed a simple and functional app. It is built in suchaway as to simplify the problem of the car selection and rental process.View the location,statement,and other information about each of the vehicles in one click.
          </div>
          <v-btn
            color="darken-1 pa-5 mt-7"
            dark
            class="rounded-lg"
          >
            <v-icon class="mr-1">
              mdi-cloud-download
            </v-icon>
            Download Apps
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PhoneSectionItem',
}
</script>
