<template>
    
    <div>
        
        <h2> Child Two </h2>
        <p> Name: {{name}}</p>
        <p> See props in this component for advanced props usage. </p>
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
            type: String,
            default: "some default name",
            required: true
        }
        
    }

}
</script>

<style scoped>

p {
    background-color: darkolivegreen;
}

</style>
