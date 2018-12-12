<template>
    
    <div>
        
        <h2> Child Four - this component is to using the event bus to pass data between components.</h2>
        <p> The components do not necessarily need to be in a parent child relationship</p>
        
        
        <button class="btn btn-primary" @click="sendData"> emit event "was-clicked" to the event bus.</button>
        <p>The parent has a function to listen for this </p>
        <p>See main.js where event bus is registered and ParentComponent.js where "was-clicked" is listened for with $on</p>
        
    </div>

</template>

<script>

// to be able to pass info to the eventBus we need to import it in files that access it
    import { eventBus } from '../main.js';

export default {


    props: {

        name: {
            type: String
        }
    },
    methods: {

        sendData (){
            // send event on channel "was-clicked" with payload "data from child four"
            eventBus.$emit("was-clicked", "data from child four!");
            
        }
    }

}
</script>

<style scoped>

p {
    background-color:greenyellow;
}

</style>
