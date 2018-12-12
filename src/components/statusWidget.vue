<template>
<div>
 <h2>Status: {{status}} </h2>
 <button @click="changeStatus">change Status</button>

</div>
</template>

<script>
export default {

    data: function(){
        return{
            status: true

        }

    },
    methods:{
        // es6 functions can be written like this

        changeStatus(){
            this.status = !this.status;
        }
    }

}
</script>

<style>

</style>

