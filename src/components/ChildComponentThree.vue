<template>
    
    <div>
        
        <h2> Child Three - this component is to demonstrate $emit to pass info from component to parent</h2>
        <p> Name: {{name}}</p>
        <button class="btn btn-primary" @click="updateName"> emit data to parent</button>
        <button class="btn btn-primary" @click="fxsentin()"> Run function from parent</button>
    </div>

</template>

<script>
export default {
    // props can also be written so that the input can be validated.
    // compared to ChildComponentOne, this component requires that name be a string
    // and that is contains a value.
    // an error is thrown in console if either are not met
    props: {

        name: {
            type: String
        },
        fxsentin: Function
    },
    methods: {

        updateName (){
            this.$emit("customEvent", "data from child comp three");
            // the emit statement is as follows:
            // this.$emit("nameOfTheEventToListenTo", "dataToPassOut");

            // on the parent element, "nameOfTheEventToListenTo" is passed into the component
            // Using the $event keywork we can access the data passed out
            // <child-three @nameOfTheEventToListenTo = "someMethod($event)";
        }
    }

}
</script>

<style scoped>

p {
    background-color: red;
}

</style>
