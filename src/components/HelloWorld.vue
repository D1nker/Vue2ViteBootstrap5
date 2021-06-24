<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"
        >Vite Documentation</a
      >
      |
      <a href="https://vuejs.org/v2/guide/" target="_blank"
        >Vue 2 Documentation</a
      >
    </p>

    <button class="btn btn-primary" @click="count++">
      count is: {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

    <button type="button" class="btn btn-primary" @click="modal.show()">
      Launch demo modal
    </button>
    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="modal.hide()"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
import { onMounted, ref } from '@vue/composition-api'
// import anyNewFeaturesYouDLikeFromVue3 //

export default {
  name: 'HelloW',
  props: {
    msg: String
  },
  setup(props) {
    console.log(props) // { user: '' }
    const count = 0
    // more explanation about ref
    // pls see => https://codingexplained.com/coding/front-end/vue-js/accessing-dom-refs
    // or => https://vuejs.org/v2/api/#ref
    let exampleModal = ref(null)
    onMounted(() => {
      console.log('mounted in the composition api!')
      console.log(exampleModal.value)
      exampleModal = new Modal(exampleModal.value)
      console.log(exampleModal)
    })
    return {
      count,
      exampleModal
    } // anything returned here will be available for the rest of the component
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
