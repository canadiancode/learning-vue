// import main App.vue 
import { createApp } from 'vue'
import App from './App.vue'

// create the app
const app = createApp(App);

// import components
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

// Add component to app
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

// mount the app to the main Javascript file
app.mount('#app');