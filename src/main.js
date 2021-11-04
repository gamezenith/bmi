import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// import  firebase  from "firebase/app";
// import  "firebase/firestore";

import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCpRZelEpJQP7jd1SWByj5oepFQM5e7nZM",
  authDomain: "ite225-nattapat.firebaseapp.com",
  projectId: "ite225-nattapat",
  storageBucket: "ite225-nattapat.appspot.com",
  messagingSenderId: "1055387087590",
  appId: "1:1055387087590:web:ee35dfcc3af42846810127",
  measurementId: "G-5S24VPF7W8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  firebase,  
  render: h => h(App)
}).$mount('#app')
