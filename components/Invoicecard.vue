<template>
  <div>
    <v-card
      class="mx-auto mt-12 mb-1 pa-5 text-center"
      max-width="400"
    >
      <v-card-text>
        <div class="d-flex justify-space-between">
          <div class="text-h6">
            Code : 
          </div>
          <div class="text-overline font-weight-bold">
            {{ invoice[0].code }}
          </div>
        </div>        
        <v-divider></v-divider>
        <div class="d-flex justify-space-between mt-5">
          <div class="text-subtitle-1">
            Name : 
          </div>
          <div class="text-overline font-weight-bold">
            {{ invoice[0].name }}
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="text-subtitle-1">
            Email : 
          </div>
          <div class="text-overline font-weight-bold">
            {{ invoice[0].email }}
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="text-subtitle-1">
            Car Name : 
          </div>
          <div class="text-overline font-weight-bold">
            {{ invoice[0].vehicle.name }}
          </div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="text-subtitle-1">
            Duration Rental : 
          </div>
          <div class="text-overline font-weight-bold">
            {{ invoice[0].duration }} Day
          </div>
        </div>
        <div class="d-flex justify-space-between mb-5">
          <div class="text-subtitle-1">
            Car Price : 
          </div>
          <div class="text-overline font-weight-bold">
            $ {{ invoice[0].vehicle.price }}
          </div>
        </div>
        <v-divider></v-divider>
        <div class="d-flex justify-space-between">
          <div class="text-h5 font-weight-bold">
           Total : 
          </div>
          <div class="text-h5 font-weight-bold">
            $ {{ invoice[0].vehicle.price }}
          </div>
        </div>
      </v-card-text>
    </v-card>
    <div class="text-center">
      <div class="text-caption">*Notes : </div>
      <div class="text-caption">- save the invoice code so you can see it again</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceCard',
  props: {
    invoice: {
      type: Array,
      required: true
    }
  }
}
</script>
