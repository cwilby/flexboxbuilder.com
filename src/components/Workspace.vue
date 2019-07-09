<template>
  <div class="fbb-workspace" @click="selectNode(null)">
    <div class="fbb-phone-display" :style="root.style">
      <tree :nodes="root.children" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['root'])
  },
  methods: {
    ...mapActions(['selectNode'])
  }
};
</script>


<style lang="sass">
.fbb-workspace
  display: flex
  width: 100%
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 1em
  background-image: url('../assets/memphis-mini.png')
  cursor: pointer

.fbb-phone-display
  display: flex
  background-color: white
  box-shadow: 5px 5px 5px lightgray
  border: 1px solid lightgray
  max-height: calc(100vh - 5em)
  overflow-y: auto
  &:hover
    transition: 0.2s ease-in-out
    cursor: pointer
    border: 1px solid cornflowerblue

  .recursive-node
    width: 100%
    display: flex
    
  
</style>