<template>
  <div class="fbb-settings">
    <header>
      Settings
    </header>
    <div class="fbb-settings-settings">
      <div v-if="selectedBlock">
        <b-form-group label="Display">
          <b-form-select v-model="selectedBlockDisplay" :options="displayOptions"></b-form-select>
        </b-form-group>
        <b-form-group label="Flex">
          <b-form-input v-model="selectedBlockFlex"></b-form-input>
        </b-form-group>
        <b-form-group label="Content">
          <b-form-input v-model="selectedBlockContent"></b-form-input>
        </b-form-group>
      </div>
      <div v-else>
        <b-form-group label="Width">
          <b-form-input v-model="rootWidth"></b-form-input>
        </b-form-group>
        <b-form-group label="Height">
          <b-form-input v-model="rootHeight"></b-form-input>
        </b-form-group>
        <b-form-group label="Flex Direction">
          <b-form-select v-model="rootFlexDirection" :options="flexDirections"></b-form-select>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  data: () => ({
    flexDirections: [
      { value: 'row', text: 'row' },
      { value: 'row-reverse', text: 'row-reverse' },
      { value: 'column', text: 'column' },
      { value: 'column-reverse', text: 'column-reverse' }
    ],
    displayOptions: [
      { value: 'none', text: 'none' },
      { value: 'block', text: 'block' },
      { value: 'inline', text: 'inline' },
      { value: 'inline-block', text: 'inline-block' },
      { value: 'flex', text: 'flex' }
    ]
  }),
  computed: {
    ...mapState(['selectedBlock']),
    ...mapFields({
      rootFlexDirection: 'root.style.flex-direction',
      rootWidth: 'root.style.width',
      rootHeight: 'root.style.height',
      selectedBlockDisplay: 'selectedBlock.style.display',
      selectedBlockFlex: 'selectedBlock.style.flex',
      selectedBlockContent: 'selectedBlock.style.content'
    })
  }
}
</script>

<style lang="sass">
.fbb-settings
  height: 100%
  border-left: 1px solid lightgray
  width: 30em

  header
    display: flex
    justify-content: center
    align-items: center
    border-bottom: 1px solid lightgray
    height: 4em
    font-size: 1.5em
    font-weight: 200

  &-settings
    padding: 1em
</style>