<template>
<div>
 <main v-if="!loading">
 <div class="grid md:grid-cols-4 gap-4">
 <PostsCard  :articles="articles"/>
 </div>
 </main>
<main v-else-if="loading">
<div class="image" >
<img :src="loadingImage" class="loader m-auto" alt="" />
</div>
</main>
</div>
</template>

<script>
// @ is an alias to /src
import PostsCard from '@/components/PostsCard.vue'


export default {
  name: 'HomeView',
  components: {
   PostsCard
  },
  data() {
    return {
       loading: true,
       articles:[],
       loadingImage: require("../assets/Preloader.gif"),
    }
  },
  methods: {
    async fetchArticleData(){
      const res= await fetch('https://newsapi.org/v2/top-headlines?country=ng&apikey=5b5bc8d7095e4950bead99416b21f771')
      const data = res.json()
      console.log (data)
      return data
    },
  },
  async created(){
    const data = await this.fetchArticleData()
    this.articles= data.articles
    this.loading= false
  }
}
</script>
<style>
.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader{
  width: 450px;
}
</style>
