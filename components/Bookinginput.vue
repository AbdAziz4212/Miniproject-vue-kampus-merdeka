<template>
  <div>
    <v-card
      elevation="2"
      class="mt-10 rounded-lg"
    >
      <v-card-title>
        <div>Orderer data</div>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Fullname"
              outlined
              dense
              hint="without title and punctuation"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Phone"
              outlined
              dense
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-text-field
              label="Email"
              outlined
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title>
        <div>Order data</div>
      </v-card-title>
      <v-row>

        <v-col
          cols="12"
          sm="12"
          md="6"
        >
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template 
              #activator="{ on, attrs }"
            >
              <v-text-field
                v-model="date"
                label="Date Order"
                prepend-icon="mdi-calendar"
                readonly
                class="pa-10"
                v-bind="attrs"
                v-on="on"
                @change="prices"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col
          cols="12"
          sm="12"
          md="6"
        >
          <v-dialog
            ref="dialog2"
            v-model="modal2"
            :return-value.sync="date2"
            persistent
            width="290px"
          >
            <template 
              #activator="{ on, attrs }"
            >
              <v-text-field
                v-model="date2"
                label="Date"
                prepend-icon="mdi-calendar"
                readonly
                class="pa-10"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog2.save(date2)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="12" md="12">
          <v-textarea
            label="Adress"
            auto-grow
            outlined
            rows="0"
            row-height="5"
            class="pa-5"
          ></v-textarea>
        </v-col>
      </v-row>
      <div class="pa-5 d-flex justify-space-between">
        <v-btn
          color="green lighten-1"
          class="ma-2 white--text"
          x-large
        >
          <div>$ {{ totalPrice }}</div>
        </v-btn> 
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          x-large
        >
          <div>Booking</div>
          <v-icon
            right
            dark  
            class="mx-2"
          >
            mdi-arrow-right-circle
          </v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BookingInput',
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    modal2: false,
    menu2: false,
    totalPrice: 2,
  }),
  methods: {
    prices () {
      // const total = this.date - this.date2
      /* eslint-disable no-console */
      console.log(this.date);
      /* eslint-enable no-console */
      // this.totalPrice = total
    }
  },
}
</script>
