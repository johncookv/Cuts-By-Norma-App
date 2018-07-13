import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDHTxd27H_WAzE1QxBYtPWAJd1ETB5QSW0",
  authDomain: "cutsbynorma.firebaseapp.com",
  databaseURL: "https://cutsbynorma.firebaseio.com",
  projectId: "cutsbynorma",
  storageBucket: "cutsbynorma.appspot.com",
  messagingSenderId: "222609049005"
};
firebase.initializeApp(config);
export default firebase;
