Vue.component('modal', {
    props: ['title'],
    data(){
        return{
          
        }
    },
    methods:{
      close(){
        this.$emit('toggle-modal')
      }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <div>
              <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data(){
      return {
        showModal: false
      }
    },
    methods:{
      toggleModal(){
        this.showModal = !this.showModal
      }
    }
  })