import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

// database.ref().set({
//     name: 'vivek kumar',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'Kolkata',
//         state: 'West Bengal'
//     }
// });

// database.ref().update({ //update only data at root level, it can change, write, and remove data
//     name: 'Sukanshu',
//     'location/city': 'Allahabad',
//     'location/state': 'UP',
//     isSingle: null
// })

// const onValueChange = database.ref().on('value', (snapshot) => {  //on() will return the callback function
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data Fetching', e);
// })

// database.ref().off('value', onValueChange);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     })
//     .catch((e) => {
//         console.log('Error', e);
//     })

// database.ref('isSingle').set(null);

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('isSingle removed');
//     })
//     .catch((e) => {
//         console.log('Error occured', e);
//     })

// database.ref('notes').push({
//     title: 'Acropolis',
//     body: 'Amazing mall in kolkata'
// })

// database.ref('notes/-L8Md4T4jMQTE6WEqCQu').update({
//     title: 'South city',
//     body: 'Amazing maul'
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 2000,
//     note: '',
//     createdAt: 1000
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
// }, (error) => {
//     console.log(error);
// })

// //data_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// //data_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //data_added event
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })