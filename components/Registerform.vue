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

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Phone"
          required
        ></v-text-field>

        <v-text-field
          v-model="job"
          label="Job"
          required
        ></v-text-field>
        
        <v-text-field
          v-model="address"
          :rules="addressRules"
          label="Address"
          required
        ></v-text-field>

        <div class="d-flex justify-space-between mt-5 ">
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
            :loading="loading"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Register
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
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be less than 8 characters',
      ],
      address: '',
      addressRules: [
        v => !!v || 'Address is required',
      ],
      job: '',
      loading: false
    }
  },
  methods: {
    validate () {
      if(this.name !== '' && this.email !== '' && this.email !== '' && this.password !== '' && this.address !== ''){
        this.loading = !this.loading
        const object = {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address,
          job: this.job
        }
        this.$emit('regisInput', object)
        setTimeout(() => (this.loading = !this.loading), 3000)
      }else{
        this.$refs.form.validate()
      }
    },
  },
}
</script>

<style scoped>
#form-login-wrapper {
  border-left: 15px solid #000000;
}
</style>
