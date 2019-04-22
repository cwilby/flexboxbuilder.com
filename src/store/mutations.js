import { updateField } from 'vuex-map-fields';

export default {
  updateField,
  
  addNode(state, node) {
    if(state.selectedNode) {
      state.selectedNode.children.push(node);
    } else {
      state.root.children.push(node);
    }
  },
  setSelectedNode(state, node) {
    state.selectedNode = node;
  }
};
