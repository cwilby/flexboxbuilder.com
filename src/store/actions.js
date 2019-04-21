export default {
  addBlock({ commit }, block) {
    block = {
      name: '',
      content: '',
      style: {
        display: 'flex',
        flex: 1,
        'background-color': 'white',
        ...block
      }
    }
    commit('addBlock', block);
  },
  selectBlock({ commit }, block) {
    commit('setSelectedBlock', block);
  }
};
