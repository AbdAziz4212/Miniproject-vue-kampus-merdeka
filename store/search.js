export const state = () => ({
  cars: [],
  info: '',
  carLimit: 12,
  carOffset: 0
})

export const mutations = {
  setCars (state, object) {
    state.cars = object
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
}
