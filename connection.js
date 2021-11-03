const inscri = document.querySelector('.inscription');



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtq6i60QWz4ThI0xF1dS8ZN5nMsnAwsdY",
  authDomain: "happynours.firebaseapp.com",
  databaseURL: "https://happynours-default-rtdb.firebaseio.com",
  projectId: "happynours",
  storageBucket: "happynours.appspot.com",
    messagingSenderId: "842662434179",
    appId: "1:842662434179:web:1260be5e4e64456110d2b6"
    };


const app = initializeApp(firebaseConfig);

import { getDatabase, get, ref, set, child, update, remove}
    from"https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const db = getDatabase();


let emaili = document.querySelector("#emaili");
let nomutilisateur = document.querySelector("#nomutilisateur");
let mdp = document.querySelector("#mdp");
let connection = document.querySelector("#connection")

function insertData() {
    set(ref(db, "compte utilisateur/" + nomutilisateur.value),{
    Email: emaili.value,
    NomDutilisateur: nomutilisateur.value,
    MotDePasse: mdp.value,
})
.then(() => {
    alert('Inscription Validé')
})
.catch ((error) => {
    alert('Error :' + error)
})
}

connection.addEventListener('click', insertData)