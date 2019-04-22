export default {
  addNode({ commit, state }, node) {
    const depth = (state.selectedNode || state.root).depth;
    const hex = 255 - (depth * 10);
    node = {
      name: '',
      content: '',
      depth: depth + 1,
      style: {
        display: 'flex',
        flex: 1,
        'background-color': `rgb(${hex}, ${hex}, ${hex})`,
        'flex-direction': 'column',
        ...node
      },
      children: []
    };

    commit('addNode', node);
  },
  selectNode({ commit }, node) {
    commit('setSelectedNode', node);
  }
};
