import { createApp, defineComponent } from 'vue'
import config from './config.toml'

console.log(config)

const App = defineComponent({
  setup() {

  }
})

createApp(App).mount('#app')
