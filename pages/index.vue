<template>
  <div>
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

    <v-container>
      <div id="why-section" class="my-16">
        <div class="text-h4 text-center font-weight-medium ma-5 mb-8">Why Choose Us</div>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
              <v-img
                max-width="150"
                lazy-src="../assets/rocket.svg"
                src="../assets/rocket.svg"
                class="mx-auto"
              ></v-img>
              <div  class="ma-4 font-weight-medium text-h5">
                Fast & Easy Booking
              </div>
              <div>
                Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
              <v-img
                max-width="150"
                lazy-src="../assets/maps.svg"
                src="../assets/maps.svg"
                class="mx-auto"
              ></v-img>
              <div  class="ma-4 font-weight-medium text-h5">
                Many Location
              </div>
              <div>
                Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card class="grey lighten-5 text-center pa-5 rounded-xl" elevation="0">
              <v-img
                max-width="200"
                lazy-src="../assets/rate.svg"
                src="../assets/rate.svg"
                class="mx-auto"
              ></v-img>
              <div  class="ma-4 font-weight-medium text-h5">
                Satisfied Customer
              </div>
              <div>
                Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-spacer></v-spacer>

      <div id="city-section" class="my-16">
        <div class="text-h4 text-center font-weight-medium ma-5 mb-8">Search by City</div>
        <v-row>
          <v-col cols="12" sm="12" md="3">
            <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="330">
              <v-img
                max-height="450"
                lazy-src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
              >
                <v-card-title class="font-weight-bold city-title">
                  Jakarta
                  <br> ->
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="3">
            <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="330">
              <v-img
                max-height="450"
                lazy-src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
              >
                <v-card-title class="font-weight-bold city-title">
                  Jakarta
                  <br> ->
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="3">
            <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="330">
              <v-img
                max-height="450"
                lazy-src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
              >
                <v-card-title class="font-weight-bold city-title">
                  Jakarta
                  <br> ->
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="3">
            <v-card class="grey lighten-5 rounded-xl mx-auto" elevation="0" max-width="330">
              <v-img
                max-height="450"
                lazy-src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                src="https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8)"
              >
                <v-card-title class="font-weight-bold city-title">
                  Jakarta
                  <br> ->
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-spacer></v-spacer>

      <div id="testimoni-section" class="my-16">
        <div class="text-h4 text-center font-weight-medium ma-5 mb-8">What Customer are saying</div>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-card class="rounded-xl mx-auto pa-5 outlined" elevation="3">
              <v-card-text>
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="26"
                ></v-rating>
              </v-card-text>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
              <v-card-actions class="mt-3">
                <v-list-item>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      size="60"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                    <v-list-item-subtitle>CEOP</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card class="rounded-xl mx-auto pa-5 outlined" elevation="3">
              <v-card-text>
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="26"
                ></v-rating>
              </v-card-text>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
              <v-card-actions class="mt-3">
                <v-list-item>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      size="60"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                    <v-list-item-subtitle>CEOP</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card class="rounded-xl mx-auto pa-5 outlined" elevation="3">
              <v-card-text>
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="26"
                ></v-rating>
              </v-card-text>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
              <v-card-actions class="mt-3">
                <v-list-item>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      size="60"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                    <v-list-item-subtitle>CEOP</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam suscipit enim quis possimus ab, architecto consectetur culpa neque obcaecati, deleniti nihil dolorum eveniet laboriosam optio facilis repudiandae hic laudantium quo.
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

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'landingPage',
  head: {
    title: 'Carpo'
  }
}
</script>

<style>
  .city-title {
    letter-spacing: 4px;
  }
</style>
