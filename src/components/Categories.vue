<template>
    <ul>
    <li class="ml-2 hover:text-red-300" @click="$emit('category-posts',category)">{{category}}</li>
    </ul>
</template>

<script>
   export default {
    name: 'Categories',
    props:['category']
   }
</script>
<style scoped>
li{
  cursor: pointer;
  
}
</style>