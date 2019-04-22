<template>
  <div class="fbb">
    <Actions />
    <Workspace />
  </div>
</template>

<script>
import Actions from './components/Actions';
import Workspace from './components/Workspace';
export default {
  components: { Actions, Workspace },
  name: 'app'
}
</script>

<style lang="sass">
html 
  box-sizing: border-box
  font-size: 16px

*, *:before, *:after 
  box-sizing: inherit

body,html,.fbb
  height: 100%
  margin: 0
.fbb
  display: flex
  flex-direction: row

.alert-border-dash
  border: 2px dashed lightgray !important
  color: lightgray
</style>
