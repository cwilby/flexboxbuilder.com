<template>
  <fragment>
    <Node
      v-for="(node, i) in nodes"
      :key="i"
      :node="node" />
  </fragment>
</template>

<script>
import Node from './Node.vue';

export default {
  components: { Node },
  name: "tree",
  props: ["nodes"]
};
</script>

<style lang="sass">
.fbb-phone-display-node
  border: 1px dashed lightgray
  transition: 0.2s ease-in-out
  &.new
    transform: scale(1.2) !important
  &:hover
    transition: 0.2s ease-in-out
    cursor: pointer
    border: 1px solid cornflowerblue
    *
      transform: scale(0.8) !important

  &.active
    border: 1px solid green
</style>
