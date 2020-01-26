
 import firebase from 'firebase'
 //import firestore from 'firebase/firestore'


 const firebaseConfig = {
    apiKey: "AIzaSyBZTbLh7T4yD-M0pkC0zjBXZ4vxbM3EcHk",
    authDomain: "alquiler-vehiculos-c139a.firebaseapp.com",
    databaseURL: "https://alquiler-vehiculos-c139a.firebaseio.com",
    projectId: "alquiler-vehiculos-c139a",
    storageBucket: "alquiler-vehiculos-c139a.appspot.com",
    messagingSenderId: "268930493286",
    appId: "1:268930493286:web:9e06511311fe4c1247f6a7",
    measurementId: "G-RM5X369G66"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp