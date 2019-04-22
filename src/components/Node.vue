<template>
  <div
    @click.stop.prevent="selectNode(node)"
    class="fbb-phone-display-node"
    :class="{new: isNew, active: selectedNode === node}"
    :style="node.style"
  >
    <tree v-if="node.children" :nodes="node.children" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: ['node'],
  data: () => ({
    isNew: true
  }),
  mounted() {
    setTimeout(() => {
      this.isNew = false;
    }, 100);
  },
  computed: {
    ...mapState(["selectedNode"])
  },
  methods: {
    ...mapActions(["selectNode"])
  }
};
</script>
