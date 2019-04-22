<template>
  <div class="fbb-actions">
    <header>Flexbox Builder</header>
    <div class="actions">
      <button class="btn btn-block btn-outline-primary" @click="addNode">Add node</button>
    </div>
    <div class="settings">
      <div v-if="selectedNode">
        <b-form-group label="Flex">
          <b-form-input v-model="selectedNodeFlex"></b-form-input>
        </b-form-group>
        <b-form-group label="Flex Direction">
          <b-form-select v-model="selectedNodeFlexDirection" :options="flexDirections"></b-form-select>
        </b-form-group>
        <b-form-group label="Content">
          <b-form-input v-model="selectedNodeContent"></b-form-input>
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
import { mapActions, mapState } from 'vuex';
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
    ...mapState(['selectedNode']),
    ...mapFields({
      rootFlexDirection: 'root.style.flex-direction',
      rootWidth: 'root.style.width',
      rootHeight: 'root.style.height',
      selectedNodeDisplay: 'selectedNode.style.display',
      selectedNodeFlex: 'selectedNode.style.flex',
      selectedNodeFlexDirection: 'selectedNode.style.flex-direction',
      selectedNodeContent: 'selectedNode.style.content'
    })
  },
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
    justify-content: center
    align-items: center
    font-size: 1.5em
    font-weight: 200

  .actions
    padding: 1em
    border: 1px solid lightgray

  .settings
    margin: 1em

  .editor
    height: 500px
</style>