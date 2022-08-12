export const state = () => ({
  info: '',
  order: {},
  status: false,
  code: '',
})

export const mutations = {
  setCode (state, params) {
    state.code = params
  },
  setOrder (state, object) {
    state.order = object
  },
  setInfo (state, param) {
    state.info = param
  }
}

export const actions = {
  async ordertransaction (store, payload) {
    /* eslint-disable no-console */
    console.log(payload.object);
    /* eslint-enable no-console */
    const link = 'https://hopeful-serval-60.hasura.app/api/rest/order-booking'
    await this.$axios.post(link, {
      code: payload.object.code,
      vehicle_id: payload.object.car.id,
      name: payload.object.fullname,
      phone: payload.object.phone,
      email: payload.object.email,
      order_date: payload.object.order_date,
      return_date: payload.object.return_date,
      duration: payload.object.duration,
      address: payload.object.address,
      total: payload.object.total
    })
    .then((Response) => {
      store.commit('setCode', Response.data.insert_carpo_transactions_one.code)
      store.commit('setInfo', '')
    })
    .catch((error) => {
      store.commit('setInfo', error)
    })
    this.$router.push({ name: 'car-booking-invoice' })
  },
  saveInputOrder (store, object) {
    /* eslint-disable no-console */
    console.log(object);
    /* eslint-enable no-console */
    store.commit('setOrder', object)
  }
}
