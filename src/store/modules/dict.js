const state = {
  dict: new Array()
}
const mutations = {
  SET_DICT: (state, { value, key }) => {
    console.log(state);
    state.dict.push({ key, value })
  }
}
const actions = {
  setDict({ commit }, data) {
    commit('SET_DICT', data)
  }
}
export default {
  state,
  mutations,
  actions
}