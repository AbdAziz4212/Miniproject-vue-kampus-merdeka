import { gql } from 'graphql-tag'

const REGISTER_QUERY = gql`
  mutation MyMutation($name: String = "", $password: String = "", $email: String = "", $phone: String = "", $job: String = "", $address: String = "") {
    insert_carpo_users(objects: {name: $name, email: $email, password: $password, phone: $phone, job: $job, address: $address}) {
      returning {
        id
        name
        email
      }
    }
  }
`;

export const state = () => ({
  cities: [],
  testimonials: [],
  info: '',
  status: false,
})

export const mutations = {
  setCities (state, object) {
    state.cities = object
  },
  setTestimonials (state, object) {
    state.testimonials = object
  },
  setInfo (state, param) {
    state.info = param
  }
}

export const actions = {
  async getFetchCities (store) {
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/carpo-regencies'
    await this.$axios.get(link)
      .then((Response) => {
        store.commit('setCities', Response.data.carpo_regencies)
        store.commit('setInfo', '')
      })
      .catch((error) => {
        store.commit('setInfo', error)
      })
  },
  async getFetchTesti (store) {
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/carpo-testimonials'
    await this.$axios.get(link)
      .then((Response) => {
        store.commit('setTestimonials', Response.data.carpo_testimonials)
        store.commit('setInfo', '')
      })
      .catch((error) => {
        store.commit('setInfo', error)
      })
  },
  async insertDataRegister (store, payload) {
    const apollo = this.app.apolloProvider.defaultClient;
    try {
      const result = await apollo.mutate({
        mutation: REGISTER_QUERY,
        variables: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          phone: payload.phone,
          address: payload.address,
          job: payload.job
        }
      })
      store.commit('setInfo', '')
      if(result.data){
        alert('Register Success')
        this.$router.push({ name: 'index' })
      }
    } catch (error) {
      alert(error)
      throw error
    }
  },
}
