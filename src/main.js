import App from './App.vue'
import router from './router';
import { createApp } from 'vue'
import vuetify from './plugins/vuetify';
import pinia from './plugins/pinia';
import './plugins/axios';
import { useMeStore } from '@/stores/me';
import './style.css'

import SvgSprite from '@/components/shared/SvgSprite.vue';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const app = createApp(App)
app.use(pinia)

const meStore = useMeStore()

meStore.getMe()
    .finally(() => {
        app
            .use(router)
            .use(vuetify)
            .component('SvgSprite', SvgSprite)
            .mount('#app')
    })
// const app = createApp(App)

// registerPlugins(app)

// app.mount('#app')
