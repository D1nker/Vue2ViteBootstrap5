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
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal"
      ref="modal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Bootstrap 5 Simple Modal</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
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

<script>
import { Modal } from 'bootstrap'
import { onMounted, ref } from '@vue/composition-api'
// import anyNewFeaturesYouDLikeFromVue3 //

export default {
  name: 'HelloW',
  props: {
    msg: String
  },
  setup(props) {
    console.log(props) // { msg: '' }
    const count = 0
    // more explanation about ref
    // pls see => https://codingexplained.com/coding/front-end/vue-js/accessing-dom-refs
    // or => https://v3.vuejs.org/guide/component-template-refs.html
    let modal = ref(null)
    onMounted(() => {
      console.log('mounted in the composition api!')
      modal = new Modal(modal.value)
    })
    return {
      count,
      modal
    } // anything returned here will be available for the rest of the component
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
