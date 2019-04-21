import { updateField } from 'vuex-map-fields';

export default {
  updateField,
  
  addBlock(state, block) {
    state.blocks.push(block);
  },
  setSelectedBlock(state, block) {
    state.selectedBlock = block;
  }
};
