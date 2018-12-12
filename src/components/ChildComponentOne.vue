<template>
    <div>
        
        <h2> Child One </h2>
        <p> Name: {{name}}</p>
        <button type="button" class="btn btn-primary" @click="changeName"> change name One to: Local Name Change. This button uses type = button</button>
        <button type="button" class="btn btn-primary" @click.prevent="changeName"> This button uses .prevent but does not use type=button</button>
        <a role="button" class="btn btn-primary" @click="changeName"> This button uses an anchor tag</a>
        <input @click="changeName" class="btn btn-primary" type="button" value="this button uses input tag">

        <button type="button" class="btn btn-primary" @click="displaystatus"> custom alert using data</button>
    </div>
</template>

<script>
export default {

props: ["name"],
data: function(){

return {
    status: `a few
    things that are
    going on
    `
}

},
methods:  {

 displaystatus(){
var vm = this;
     this.$swal( {
  
  type: 'info',
  title: vm.status,
  showConfirmButton: true
  });
 }, 

 changeName() {
 
 this.name = "Local Name Changed"
 this.$swal( {
  
  type: 'success',
  title: `Local Name 
  One 
  Changed!
  `,
  showConfirmButton: false,
  timer: 1300});

 }

}

}
</script>

<style scoped>

p {
    background-color: blueviolet;
}


</style>
