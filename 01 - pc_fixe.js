let articles = [ 
    // {
    //     id: 1,
    //     denomination: "Alienware Aurora R12-295",
    //     marque: 'Alienware',
    //     Processeur: 'Intel Core i7-11700KF',
    //     dispo: 'EN STOCK',
    //     price: 2199.95,
    //     img: 'img/PCFIXE1.jpg'
    // },
    // {
    //     id: 2,
    //     denomination: "Dell XPS 8940-687",
    //     marque: 'Dell',
    //     Processeur: 'Intel Core i5-11400' ,
    //     dispo: 'EN STOCK',
    //     price: 899.95,
    //     img: 'img/PCFIXE2.jpg'
    // },
    // {
    //     id: 3,
    //     denomination: "Acer Predator Orion 5000",
    //     marque: 'Acer',
    //     Processeur: 'Intel Core i7-10700K',
    //     dispo: 'EN STOCK',
    //     price: 2599.95,
    //     img: 'img/PCFIXE3.jpg'
    // },
    // {
    //     id: 4,
    //     denomination: "Altyk - Le Grand PC - F1-I58-S05",
    //     marque: 'Altyk',
    //     Processeur	:'Intel Core i5-10400F' ,
    //     dispo: 'EN STOCK',
    //     price: 699.95,
    //     img: 'img/PCFIXE4.jpg'
    // },
    // {
    //     id: 5,
    //     denomination: "ASUS D340MF-I39100054R",
    //     marque: 'Asus',
    //     Processeur: 'Intel Core i3-9100' ,
    //     dispo: 'EN STOCK',
    //     price: '559.95',
    //     img: 'img/PCFIXE5.jpg'
    // },
    // {
    //     id: 6,
    //     denomination: "HP Omen GT12-1157nf",
    //     marque: 'HP',
    //     Processeur: 'AMD Ryzen 7 5700G' ,
    //     dispo: 'EN STOCK',
    //     price: 1699.95,
    //     img: 'img/PCFIXE6.jpg'
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

const displayArticle = () =>
 {
    const users = fetch('https://projet-commun-joe-default-rtdb.firebaseio.com/pc fixes.json')
    .then(async response => {
      try {
        const articles = await response.json();
        console.log(articles);
        const articlesNodes = articles.map ((article) => {
            return createArticle(article)
        });
        app.append(...articlesNodes)
      } catch (e) {
        console.log(e);
      }
    })
    

} 

const app = document.querySelector('.articles-container');

const span = document.querySelector('.spanny');

const createArticle = (article) => {

const divArticle = document.createElement('div');
const image = document.createElement('img');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const div2 = document.createElement('div');
const price = document.createElement('p');
const btn = document.createElement('button');
const btn2 = document.createElement('button2');



btn.addEventListener('click', (event) => {
    event.preventDefault();
    btn.style.backgroundColor = 'green';
    btn.innerText = "Ajouter au panier";
    btn2.style.display='block';
    btn.style.display='none';
    addArticleToCart(article);
    priceCart();
})



btn2.addEventListener('click', (event) => {
    event.preventDefault();
    btn2.style.backgroundColor = 'red';
    btn2.innerText = "Supprimer du panier";
    btn.style.display='block';
    btn2.style.display='none';
    removeArticleToCart(article);
    priceCart();
})







divArticle.classList.add('article');
image.src = article.img;
image.alt = 'Pc Alienware';
div2.classList.add('article2');

h2.innerText = article.denomination;
p.innerText = 'DISPO : EN STOCK';
price.innerText = article.price;
btn.innerText = 'Ajouter au panier';
btn2.innerText = 'Supprimer du panier ';
btn2.style.backgroundColor = 'red';
btn2.style.textAlign = 'center'

divArticle.append(image, h2, p, div2, );
div2.append(price, btn, btn2, );

return divArticle;

}

// fonction ajout panier 
const addArticleToCart = (article) => {
    panier.push(article);
    console.log(panier);
    span.innerText = panier.length;
}


const removeArticleToCart = (article) => {
    let deleteArticle = panier.filter(value => value.id !== article.id);
    panier = deleteArticle;
    console.log(panier);
    if (panier.length == 0) {
        span.innerText = "";
    } else { 
        span.innerText = panier.length;
    }
   
}

const priceCart = () => {
    const total = panier.reduce((acc, value) => {
        acc += value.price;
        return acc;
        }, 0);
        console.log(total);
}





displayArticle()




