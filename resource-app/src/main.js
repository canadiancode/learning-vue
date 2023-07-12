// import main App.vue 
import { createApp } from 'vue'
import App from './App.vue'

// import components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

// create the app
const app = createApp(App);

// add the components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

// mount the app to the main Javascript file
app.mount('#app');