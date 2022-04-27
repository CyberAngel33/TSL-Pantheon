// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app-check.js"
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

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LesNXwfAAAAAOwU40_N-M8QI3Y_o9ook_R6JHJf'),
    isTokenAutoRefreshEnabled: true
  });

// let metaResp = MetaMaskConnection().result]["WalletAdress"];

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