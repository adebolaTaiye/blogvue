import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnologyView from '../views/TechnologyView.vue'
import SportsView from '../views/SportsView.vue'
import EntertainmentView from '../views/EntertainmentView.vue'
import SearchResults from '../views/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
  path: '/tech',
  name: 'technology',
  component: TechnologyView
 },
 {
  path: '/sports',
  name: 'sports',
  component: SportsView
 },
 {
  path: '/entertainment',
  name: 'entertainment',
  component: EntertainmentView
 },
  {
   path: '/search/:searchText',
  name: 'search',
   component: SearchResults
   },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
