<template>
  <div class="fbb-workspace" @click="selectBlock(null)">
    <div class="fbb-phone-display" :style="root.style">
      <div 
        v-for="(block, i) in blocks" 
        :key="i" 
        @click.stop.prevent="selectBlock(block)"
        class="fbb-phone-display-block" 
        :class="block.class"
        :style="block.style">
        {{block.content || i}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['root', 'blocks'])
  },
  methods: {
    ...mapActions(['selectBlock'])
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

  &-block
    &:hover
      transition: 0.2s ease-in-out
      border: 1px solid cornflowerblue
      cursor: pointer
  
</style>