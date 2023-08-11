import "./style/index.less"
import "normalize.css"
import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import { registerIcon } from "./global/registerIcon"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerIcon)
app.mount("#app")
