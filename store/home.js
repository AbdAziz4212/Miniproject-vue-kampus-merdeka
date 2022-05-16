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
  }
  