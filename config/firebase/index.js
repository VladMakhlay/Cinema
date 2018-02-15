import firebase from 'firebase';

const DB_CONFIG = {
    apiKey: 'AIzaSyAW08EXqm199g5cjgJ6fdJrdZH-Tsh2hc0',
    authDomain: 'cinema-82899.firebaseapp.com',
    databaseURL: 'https://cinema-82899.firebaseio.com',
    projectId: 'cinema-82899',
    storageBucket: 'cinema-82899.appspot.com',
    messagingSenderId: '525214591150',
};

const APP = firebase.initializeApp(DB_CONFIG);

export default APP;
