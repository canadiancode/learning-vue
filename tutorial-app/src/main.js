// import = import/export JavaScript to different files
// use ./ when importing files, no need for package imports

// Importing createApp method from vue package
import { createApp } from 'vue';

// import default export from App.vue file (the "App" is just a variable)
// importing the default export object from the App.vue file
import App from './App.vue';

// Create Vue app using createApp method
const app = createApp(App);

// import the FriendContact component file into the main.js file
import FriendContact from './components/FriendContact.vue';

// import the NewFriend component file into the main.js file
import NewFriend from './components/NewFriend.vue';

// add component to Vue app
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

// Mounting to the public > index.html div with the ID of app
app.mount('#app');