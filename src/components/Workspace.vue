<template>
  <div class="fbb-workspace" @click="selectNode(null)">
    <div class="fbb-phone-display" :style="root.style">
      <recursive-node :nodes="root.children" />
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

.fbb-phone-display
  display: flex
  background-color: white
  box-shadow: 5px 5px 5px lightgray
  border: 1px solid lightgray

  .recursive-node
    width: 100%
    display: flex
    
  
</style>