<template>
  <div>
    <div>
      <v-img
        lazy-src="/assets/logobig.png"
        max-height="150"
        max-width="250"
        src="/assets/logobig.png"
        class="mx-auto mb-16"
      ></v-img>
    </div>
    <v-card
      id="form-login-wrapper"
      elevation="2"
      class="pa-10"
    >
      <v-card-title>
        Register
      </v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <div class="d-flex justify-space-between">
          <v-btn
            color="blue-grey"
            class="white--text"
            outlined
            nuxt
            @click="$router.back()"
          >
            <v-icon
              dark
            >
              mdi-arrow-left-bold
            </v-icon>
              Back
          </v-btn>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Login
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>
#form-login-wrapper {
  border-left: 15px solid #000000;
}
</style>
