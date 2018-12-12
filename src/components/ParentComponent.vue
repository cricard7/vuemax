<template>
    <div>
        
        <div class="jumbotron">
            <h1> Parent </h1>
            <p>Parent nameone: {{name}} </p>
            <p>Parent nameTwo: {{nameTwo}} </p>
            <p>Parent nameThree: {{nameThree}}</p>
            <button class="btn btn-primary" @click="changeNameOne">Change Name One </button>
            <button class="btn btn-primary" @click="changeNameTwo">Change Name Two </button>
        </div>
      
        <div class="jumbotron">
            <child-one :name="name"></child-one>
        </div>
        
        <div class="jumbotron">
            <child-two :name="nameTwo"></child-two>
        </div>

        <div class="jumbotron">
            <child-three :fxsentin="callbackForch3" :name="nameThree" @customEvent="ch3updatename($event)"></child-three>
        </div>

        <div class="jumbotron">
            <child-four></child-four>
        </div>
        


    </div>
</template>

<script>

//parent comonent wants to listen to events sent through eventBus
// so need to import it
// see where created listens to events
import { eventBus } from '../main.js';


import ch1 from './ChildComponentOne.vue';
import ch2 from './ChildComponentTwo.vue';
import ch3 from './ChildComponentThree.vue';
import ch4 from './ChildComponentFour.vue';

export default {
    created (){
        //when the event "was-clicked" fires on event bus
        // listen to it and call a function from this parent component
    eventBus.$on('was-clicked', this.wasClickedFromch4);
   
   },
    components: {
        "child-one": ch1,
        "child-two": ch2,
        "child-three": ch3,
        "child-four": ch4
    },
    data: function(){

        return{
            name: "Name One",
            nameTwo: "Name Two",
            nameThree: "Name Three"

        }

    },
    methods: {

        wasClickedFromch4(data){
            // when child four sends the "was-clicked" event through the event bus
            // this is run. The payload passed through the event should show up in data

            this.$swal( {
            
            type: 'success',
            title: `data passed was passed from child 4: ` + data,
            showConfirmButton: false,
            timer: 2000});

        },
        changeNameOne() {

            this.name = "name One changed!"
        },
        changeNameTwo() {
            this.nameTwo = "Name Two Changed"
        },
        ch3updatename(data) {
            

            this.$swal( {
            
            type: 'success',
            title: `data passed was: ` + data,
            showConfirmButton: false,
            timer: 2000});

        },
        
        callbackForch3() {


            this.$swal( {
            
            type: 'success',
            title: `Callback function stored in parentComponent
            but is run in child component three`,
            showConfirmButton: false,
            timer: 2000});

        }

    }

}
</script>

<style scoped>



</style>
