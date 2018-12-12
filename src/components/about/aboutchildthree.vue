<template>
    
    <div>
       Hi - Im aboutchildthree.vue
       This route accepts params in the URL. child3 link hardcodes ID:1 in the link. It also has a special way to call using the router-link. See examplelist.vue for how this is dynamically bound.
      <strong> See routes.js and examplelist.vue</strong>
      <p>This component uses a named a route</p>

      
      <h1>props ID: <span class="badge badge-secondary">{{ID}}</span></h1>

        <h1>Data passed in by aboutRouter</h1>
        <p>{{formdata}}</p>

    </div>

</template>

<script>

// to be able to pass info to the eventBus we need to import it in files that access it
    

export default {

    name: 'aboutChildThree',
    props: {

        name: {
            type: String
        },
        ID: {
            type: Number
        },
        formdata: {
            type: Array
        }
    },
    methods: {

    }

}
</script>

<style>


</style>
