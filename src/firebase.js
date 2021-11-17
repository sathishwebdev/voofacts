import firebase from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';
// import ('https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js');
// import ('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js');

   
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const Config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };

 firebase.initializeApp(Config);
//  const messaging = firebase.messaging();
     
  // const appCheck = firebase.appCheck();
  
  // appCheck.activate('6LcmUhMcAAAAACHQkkwiSMSU_3Xt1CiKyIY0mnr2',true);
  // messaging.onBackgroundMessage((payload) => {
  //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
  //   // Customize notification here
  //   const notificationTitle = 'Background Message Title';
  //   const notificationOptions = {
  //     body: 'Background Message body.',
  //     icon: '/firebase-logo.png'
  //   };
  
  //   self.registration.showNotification(notificationTitle,
  //     notificationOptions);
  // });