let produits = [
    // {
    //     id: 1,
    //     denomination: "Apple iPhone 13 Pro Max 128 Go ",
    //     details: "Smartphone 5G-LTE IP68 Dual SIM - Apple A15 Bionic Hexa-Core - RAM 6 Go - Ecran Super Retina XDR OLED ProMotion 120 Hz 6.7' 1284 x 2778 - 128 Go - NFC/Bluetooth 5.0 - iOS 15",
    //     dispo: 'EN STOCK',
    //     prix: 1259.00,
    //     visu: 'img/iphone13.jpg',
    //     compo:"iPhone 13 Pro Max. Un système photo pro amélioré comme jamais. Un écran Super Retina XDR de 6,7 pouces avec technologie ProMotion pour plus de rapidité et de réactivité. La puce A15 Bionic, d'une vitesse fulgurante. La 5G ultra-rapide.",
    // },
    // {
    //     id: 2,
    //     denomination: "Samsung Galaxy A03s Noir",
        
    //     details: "Smartphone 4G-LTE Dual SIM - Helio P35 8-Core 2.3 GHz - RAM 3 Go - Ecran tactile 6.5' 720 x 1600 - 32 Go - NFC/Bluetooth 5.0 - 5000 mAh - Android 11",
    //     dispo: 'STOCK EPUISE',
    //     prix: 159.95,
    //     visu: 'img/samsunggalax.jpg',
    //     compo:"Le Samsung Galaxy A03s est un smartphone élégant et accessible au plus grand nombre. Il embarque notamment un processeur Helio P35 Octo-Core cadencé à 2.3 GHz, 3 Go de RAM et une capacité de stockage de 32 Go.",
    // },  
    // {
    //     id: 3,
    //     denomination: "Xiaomi Redmi Note 10S Gris (6 Go / 128 Go)",
    //     details: "Smartphone 4G-LTE Advanced Dual SIM - Helio G95 Octo-Core 2.05 GHz - RAM 6 Go - Ecran tactile AMOLED 6.43' 1080 x 2400 - 128 Go - NFC/Bluetooth 5.1-5000 mAh-Android 11",
    //     dispo: 'EN STOCK',
    //     prix: 249.95,
    //     visu: 'img/Xiamomiredmi.jpg',
    //     compo:"Capturez de nouvelles aventures et conservez vos souvenirs avec le Xiaomi Redmi Note 10S. Pour cela, il se dote d'un superbe écran tactile AMOLED de 6.43' affichant une résolution Full HD+ de 1080 x 2400 pixels et intègre un processeur Helio G95 Octo-Core cadencé à 2.05 GHz.",
    // },
    // {
    //     id: 4,
    //     denomination: "Crosscall Core-S4",
    //     details: "Téléphone 4G-LTE IP68 Dual SIM - MediaTek MTK6731 Quad-Core 1.1 GHz - RAM 512 Mo - Ecran 2.4' 240 x 320 - 4 Go - Bluetooth 4.2 - 2300 mAh",
    //     dispo: 'EN STOCK',
    //     prix: 119.95,
    //     visu: 'img/crosscall.jpg',
    //     compo:"Le Crosscall Core-S4 est le téléphone idéal pour les personnes recherchant la compacité, la solidité et la simplicité d'un téléphone à touches. 4G, il est équipé d'un processeur MediaTek MTK6731 Quad-Core cadencé à 1.1 GHz, de 512 Mo de RAM, d'une capacité de stockage de 4 Go et d'un écran de 2.4'",

    // }
]

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWZ_LwYDbcXKeNT-lACYeyNGFKZhc3jM0",
  authDomain: "projet-commun-joe.firebaseapp.com",
  projectId: "projet-commun-joe",
  storageBucket: "projet-commun-joe.appspot.com",
  messagingSenderId: "487260477956",
  appId: "1:487260477956:web:993aa3e7b3bd033c76f351",
  measurementId: "G-BKGSSCZNL8"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app2);


let panier = [];


const enter = document.querySelector('.princ');
const span = document.querySelector('.spanny');

const displayProduit = () => {
    const users = fetch('https://projet-commun-joe-default-rtdb.firebaseio.com/smartphones.json')
    .then(async response => {
      try {
        const produits = await response.json(); 

    const produitNode = produits.map((produit) => { 
    return createProduit(produit)
});
enter.append(...produitNode)
} catch (e) {
    console.log(e);
  }
})
}

const createProduit = (produit) => {

    // const bloc = document.createElement('div');
    const divGene = document.createElement('div');
    const divProduit = document.createElement('div');
    const titre = document.createElement('h2');
    const ssti = document.createElement('h3');
    const vue = document.createElement('img');
    const divDescri = document.createElement('div');
    const destex = document.createElement('p');
    const divAction = document.createElement('div');
    const para = document.createElement('p');
    const prix = document.createElement('p');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
   
    // visuel image
    vue.src = produit.visu;
    vue.alt = produit.titre;
    // enter.classList.add('main');
    
    divGene.classList.add('gene');
    divProduit.classList.add('produit');
    divDescri.classList.add('discri');
    divAction.classList.add('action');
    btn1.classList.add('btn1');
    btn2.classList.add('btn2');

    // Texte Titre sous titre paragraphe prix bouton panier
    titre.innerText = produit.denomination;
    ssti.innerText = produit.details;
    destex.innerText = produit.compo;
    para.innerText = 'Dispo : EN STOCK';
    prix.innerText = produit.prix;
    btn1.innerText = "Ajouter au panier";
    btn2.innerText = "Retirer du panier";
    
    divGene.append(divProduit, divDescri, divAction)
    divProduit.append(titre, ssti, vue);
    divDescri.append(destex);
    divAction.append(para, prix, btn1, btn2);

    //changement de button changement de button changement de button changement de button changement de button changement de button
// btn1.addEventListener('click', () => {
    
// })

btn1.addEventListener('click' , () => {
btn2.style.display='block';
btn1.style.display='none';
addarticleToCart(produit);
priceCart();   
      }
    );

btn2.addEventListener('click' , () => {
    btn1.style.display='block';
    btn2.style.display='none';
    suparticleToCart(produit);
    priceCart();
   
    }
            );

//changement de button changement de button changement de button changement de button changement de button changement de button

    return divGene;
 
}

//fonction ajout panier et console log du panier

const addarticleToCart = (produit) => {
    panier.push(produit);
    console.log(panier);
    span.innerText = panier.length;

}

// fonction suppression article panier

const suparticleToCart = (produit) => {
  let newPanier = panier.filter(value => value.id !== produit.id );
  panier = newPanier
console.log(panier);
if (panier.lenght == 0) {
    span.innerText ="";
}

span.innerText = panier.length;
}

const priceCart =() => {


const total = panier.reduce((acc, value) => {
    acc += value.prix;
    return acc;
}, 0);
console.log(total);

}

displayProduit();