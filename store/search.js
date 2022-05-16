export const state = () => ({
  cars: [],
  regencies: [],
  transmision: [],
  brand: [],
  type: [],
  info: '',
  carLimit: 12,
  carOffset: 0,
  status: false,
})

export const mutations = {
  setCars (state, param) {
    state.cars = param
  },
  setSearchData (state, object) {
    state.regencies = object.carpo_regencies
    state.transmision = object.carpo_vehcile_transmissions
    state.type = object.carpo_vehicle_types
    state.brand = object.carpo_vehicle_brands
  },
  setInfo (state, param) {
    state.info = param
  }
}

export const actions = {
  async getFetchCar (store) {
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/vehicle-fetch'
    await this.$axios.get(link, {
      params: {
        offset: store.state.carOffset,
        limit: store.state.carLimit
      }
    })
    .then((Response) => {
      store.commit('setCars', Response.data.carpo_vehicle)
      store.commit('setInfo', '')
    })
    .catch((error) => {
      store.commit('setInfo', error)
    })
  },
  async getAllSearchData (store) {
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/search-car-data'
    await this.$axios.get(link)
    .then((Response) => {
      store.commit('setSearchData', Response.data)
      store.commit('setInfo', '')
    })
    .catch((error) => {
      store.commit('setInfo', error)
    })
  },
  async getCarsBySearch (store, payload) {
    /* eslint-disable no-console */
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/search-car'
    console.log(payload);
    await this.$axios.get(link, {
      params: {
        _eq: payload.city,
        _eq1: payload.transmision,
        _eq2: payload.brand,
        _eq3: payload.type
      }
    })
    .then((Response) => {
      store.commit('setCars', Response.data.carpo_vehicle)
      // console.log(Response.data.carpo_vehicle)
      store.commit('setInfo', '')
    })
    .catch((error) => {
      store.commit('setInfo', error)
    })
    /* eslint-enable no-console */
  },
}
