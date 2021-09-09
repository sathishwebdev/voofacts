import firebase from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';

   
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const Config = {
    apiKey: "AIzaSyCz4_Llv4EXBZJ6uFgMyU7FY3AP2n8E9io",
    authDomain: "facts-96f03.firebaseapp.com",
    databaseURL: "https://facts-96f03-default-rtdb.firebaseio.com",
    projectId: "facts-96f03",
    storageBucket: "facts-96f03.appspot.com",
    messagingSenderId: "480974795893",
    appId: "1:480974795893:web:1192d07874b9327c1d743c",
    measurementId: "G-QSPL2B5BQS"
  };

 firebase.initializeApp(Config);

     
  // const appCheck = firebase.appCheck();
  
  // appCheck.activate('6LcmUhMcAAAAACHQkkwiSMSU_3Xt1CiKyIY0mnr2',true);
