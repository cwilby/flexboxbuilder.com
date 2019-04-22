<template>
  <div class="fbb-actions">
    <header>Flexbox Builder</header>
    <div class="actions">
      <button class="btn btn-block btn-outline-primary" @click="addNode">Add node</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    code: ""
  }),
  methods: {
    ...mapActions(['addNode'])
  }
};
</script>

<style lang="sass">
.fbb-actions
  height: 100%
  border-right: 1px solid lightgray
  width: 30em

  header
    display: flex
    height: 4em
    border-bottom: 1px solid lightgray
    justify-content: center
    align-items: center
    font-size: 1.5em
    font-weight: 200

  .actions
    margin: 1em

  .settings

  .editor
    height: 500px
</style>