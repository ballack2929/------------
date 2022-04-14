/* eslint-disable */ 
import { createApp } from 'vue';
import App from './App.vue';

import { message,text } from './data';
import { func12 } from './func';

createApp(App).mount('#app');
func12(message);
func12(text);