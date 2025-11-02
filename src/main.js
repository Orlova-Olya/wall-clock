import { createApp } from 'vue'
import App from './App.vue'

import './styles/common.css'
import './styles/variables.css'

import WallClock from './components/WallClock.vue'

const app = createApp(App)
app.component('WallClock', WallClock)
app.mount('#app')
