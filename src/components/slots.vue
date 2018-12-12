<template>
<div>

    <div>
        This info is from the slots component in slots.vue registered as a local component in App.vue
    </div>
    
    <slot></slot>

    <div>
        <slot name="title">default title</slot>

        <p>some info between 'title' and content</p>
        
        <slot name="content">default content</slot>
    </div>
</div>    
</template>

<script>
export default {


}
</script>

<style scoped>

div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30 px;
    margin: auto;
}

</style>
