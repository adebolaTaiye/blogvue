<template>
<div>
 <main v-if="!loading">
<h6 class="font-bold text-3xl mb-8" >Entertainment News</h6>
 <div class="grid md:grid-cols-4 gap-4">
 <PostsCard  :articles="articles"/>
 </div>
 </main>

<main v-else-if="loading">
<div class="image" >
<img :src="loadingImage" class="loader" alt="" />
</div>
</main>
</div>
</template>
<script>
import PostsCard from '@/components/PostsCard.vue'
export default {
  name: 'TechnologyView',
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
      const res= await fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=Entertainment&apiKey=5b5bc8d7095e4950bead99416b21f771`)
      const data = res.json()
      console.log (data)
      return data
    },
  },
  async created(){
     const data = await this.fetchArticleData()
    this.articles= data.articles
    this.loading = false
  }

}
</script>