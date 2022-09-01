<template>
<header class=" bg-blue-600 head p-4 mb-6">
<div class="flex bars">
<router-link to="/"><div class="text-3xl md:text-4xl font-bold text-yellow ">BL<span class="text-white">OG</span></div></router-link>
<i @click="barsMenu" class="fa-solid fa-bars 4xl"></i>
</div>

<div v-if="toggle" class="dd md:hidden">
  <div class="font-bold text-white mt-6">
<router-link class="mb-3"  to="/tech"><Categories category="Technology" /></router-link>
<router-link class="mb-3" to="/sports"><Categories category="Sports" /></router-link>
<router-link to="/entertainment"><Categories category="Entertainment" /></router-link>
  <form @submit="onSubmit" class="bars-form ">
    <input type="text" v-model.lazy="searchText" class="rounded border" />
    <button><i class=" s se fa-solid fa-search"></i></button>
  </form>
  </div>
</div>

<div class="font-bold text-white cat ">
<router-link  to="/tech"><Categories category="Technology" /></router-link>
<router-link to="/sports"><Categories category="Sports" /></router-link>
<router-link to="/entertainment"><Categories category="Entertainment" /></router-link>
</div>
<div>
  <form @submit="onSubmit" class="search">
    <input v-model.lazy="searchText" type="text" class="rounded  border"/>
    <button><i class=" s fa-solid fa-search "></i></button>
  </form>
 
</div>
</header>
</template>

<script>
  import Categories from './Categories.vue'

  export default {
    name: 'NavBar',
    components: {
    Categories,
},
 data(){
  return {
     searchText: '',
    toggle: false

  }
 },
 methods: {
      barsMenu(){
        this.toggle = !this.toggle 
      },
      onSubmit(e){
      e.preventDefault()
      if(this.searchText ==""){
       this.$router.push({path:'/'})
      }else {
        this.$router.push({path:`/search/${this.searchText}`})
      }
      
      }
 }
  }
</script>
<style scoped>
    .head {
      position: sticky;
      top:0;
    }
   .s{
    margin-left: 10px;
    color: white;
    font-size: 35px;
  }
  .se{
    margin-top: -25px;
    font-size: 30px;
  }
  .bars{
    justify-content: space-between;
  }
  .fa-bars{
    color: #fff;
    display: none;
    font-size: 35px;
  }
  li{
    text-decoration: none;
  }

  .search{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: -35px;
  }
  .search input{
    width:250px;
    padding: 5px
  } 
  .bars-form input{
    width: 85%;
    padding: 3px;
  }

  .cat {
    margin-left: 150px;
    margin-top:-32px;
    display: flex;
    font-size: 17px
  }
  @media (max-width:576px){
   .cat{
    display: none;
   }
   .search{
    display: none;
   }
   .fa-bars{
    display: contents;
   }
 }
  @media (max-width:768px){
    .cat{
    display: none;
   }
   .search{
    display: none;
   }
   .fa-bars{
    display: contents;
   }
 }

</style>