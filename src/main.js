import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Page/Home.vue'
import Activities from './components/Page/Activities.vue'
import Events from './components/Page/Events.vue'
import Members from './components/Page/Members.vue'
import Preview1 from './components/Preview/popupLog.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/activities', component: Activities },
    { path: '/events', component: Events },
    { path: '/members', component: Members },
    { path: '/Preview1', component: Preview1},
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
