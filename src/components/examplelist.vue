<template>
    
<div>

<div class="list-group">
  
  <router-link 
    type="button"
    tag="button"
    :key="item.ID" 
    v-for="item in items"
    class="list-group-item list-group-item-action"
    :to="{name: 'childthree', params: {ID: item.ID}}"
    active-class="active"
    >
    {{item.name}} ID: {{item.ID}}
  </router-link>
  <button type="button" class="list-group-item list-group-item-action" :class="{ 'active': $route.path == '/about/three/7'}" @click="changeRouteTo7">Change Route ID to 7 by script</button>
</div>

</div>



</template>

<script>
export default {
methods: {

  changeRouteTo7(){

    this.$router.push({ name: "childthree", params: {ID: 7}});
    //see in template how the active class is being set
  }

},
data: function(){
        return{
            status: true,
            items: [
{ name: "first Item",
  ID: 1},
  { name: "Second Item",
  ID: 2},
  { name: "Third Item",
  ID: 3},
  { name: "Four Item",
  ID: 4},
  { name: "Five Item",
  ID: 5},
  { name: "Six Item",
  ID: 6},
  

            ]

        }

    }

}
</script>

<style>

</style>
