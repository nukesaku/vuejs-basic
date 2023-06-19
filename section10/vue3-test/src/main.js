import { createApp } from 'vue'
import App from './App.vue'
import Stub from './Stub.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
createApp(Stub).mount('#stub')