import firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyARSFyj7P4env--0qZ4QL8KnkZoBOKazOM",
    authDomain: "chat-app-da9b6.firebaseapp.com",
    databaseURL: "https://chat-app-da9b6-default-rtdb.firebaseio.com",
    projectId: "chat-app-da9b6",
    storageBucket: "chat-app-da9b6.appspot.com",
    messagingSenderId: "649724997429",
    appId: "1:649724997429:web:002ee085ee586a086d667c"
  };
// Initialize Firebase
if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();