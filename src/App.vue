<template>
  <div class="fbb">
    <Actions />
    <Workspace />
    <Settings />
  </div>
</template>

<script>
import Actions from './components/Actions';
import Workspace from './components/Workspace';
import Settings from './components/Settings';
export default {
  components: { Actions, Workspace, Settings },
  name: 'app'
}
</script>

<style lang="sass">
html 
  box-sizing: border-box

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
