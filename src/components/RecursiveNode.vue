<template>
  <fragment> 
    <div
      v-for="(node, i) in nodes"
      :key="i"
      @click.stop.prevent="selectNode(node)"
      class="fbb-phone-display-node"
      :class="{active: selectedNode === node}"
      :style="node.style"
    >
      <recursive-node v-if="node.children" :nodes="node.children" />
    </div>
  </fragment>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "recursive-node",
  props: ['nodes'],
  computed: {
    ...mapState(['selectedNode'])
  },
  methods: {
    ...mapActions(['selectNode'])
  }
};
</script>

<style lang="sass">
.fbb-phone-display-node
  border: 1px dashed lightgray
  margin: .2em
  &:hover
    transition: 0.2s ease-in-out
    border: 1px solid cornflowerblue
    cursor: pointer

  &.active
    border: 1px solid green
</style>
