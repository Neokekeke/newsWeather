import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';
import news from '../components/news/news.vue';
import weather from '../components/weather/weather.vue';
import movie from '../components/movie/movie.vue';
import movieTop250 from '../components/movie/movieTop250';
import movieHot from '../components/movie/movieHot';
import movieComing from '../components/movie/movieComing';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '电影',
      component: Home,
      children:[
        {
          path: 'movie',
          name: '电影',
          component: movie,
          children:[
            {
              path: 'top250',
              name: 'Top250',
              component: movieTop250
            },
            {
              path: 'movieHot',
              name: '正在热映',
              component: movieHot
            },
            {
              path: 'movieComing',
              name: '即将上映',
              component: movieComing
            }
          ]
        },
        {
          path: 'news',
          name: '新闻',
          component: news
        },
        {
          path: 'weather',
          name: '天气',
          component: weather
        }
      ]
    }
  ]
})
