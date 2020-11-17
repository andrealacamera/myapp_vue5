import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAQUvsG9SlRzJ6rPfXt24RlD7p3u3AX6oE",
  authDomain: "vue-example-687db.firebaseapp.com",
  databaseURL: "https://vue-example-687db.firebaseio.com",
  projectId: "vue-example-687db",
  storageBucket: "vue-example-687db.appspot.com",
  messagingSenderId: "135025046562",
  appId: "1:135025046562:web:558c4345bac0f7889a867b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;