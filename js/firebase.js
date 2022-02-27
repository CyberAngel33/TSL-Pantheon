// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDBQ1q2YW6N2UZpW6AQPUCB5yCmsvERgnY",
  authDomain: "tsl-pantheon.firebaseapp.com",
  projectId: "tsl-pantheon",
  storageBucket: "tsl-pantheon.appspot.com",
  messagingSenderId: "519354809427",
  appId: "1:519354809427:web:c7f5991ce270aeb2f59aa6",
  measurementId: "G-2JC9NH9TKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();


const submitButton = document.querySelector("#EmailSubmit");
submitButton.addEventListener("click", function(){
    let EmailValue = document.querySelector("#recipient-email").value;
    const emails = doc(firestore, 'emails/'+EmailValue)
    const email = {
        Email: EmailValue
    }
    setDoc(emails, email)
    .then(()=>{
        // alert(email.Email);
        modalClose();
    });
});
// function getMarker() {
//     const snapshot = await firebase.firestore().collection('events').get()
//     return snapshot.docs.map(doc => doc.data());
// }
// let sm = getMarker();
// console.log(sm);