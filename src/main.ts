import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import naive from 'naive-ui/es/preset'
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.use(VueApexCharts)

app.mount('#app')
