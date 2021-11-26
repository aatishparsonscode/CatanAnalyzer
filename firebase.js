import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAik03BVLFLFkDhuK2q8LQ5neri06IZyk8",
    authDomain: "catananalyzer.firebaseapp.com",
    databaseURL: "https://catananalyzer.firebaseio.com",
    projectId: "catananalyzer",
    storageBucket: "catananalyzer.appspot.com",
    messagingSenderId: "951146352655",
    appId: "1:951146352655:web:ae99c9bed54c8f9f7f537a",
    measurementId: "G-SW0XZE5N8B"
  };
  // Initialize Firebase
  export const Firebase = firebase.initializeApp(firebaseConfig);
  firebase.analytics();