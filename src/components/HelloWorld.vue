<template>
  <div class="hello-world">
    <h1>Hello World!</h1>
    <button @click="showAlert">sweetalert2 button</button>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  methods: {
    showAlert(){
//use sweetalert2
this.$swal( {
  position: 'top-end',
  type: 'success',
  title: `your work
  has been
  saved!!!`,
  showConfirmButton: false,
  timer: 1500});

    }


  },
  deactivated(){

    console.log("helloworld deactivated");
  },
  activated(){

    console.log("helloworld activated");
  }
}
</script>