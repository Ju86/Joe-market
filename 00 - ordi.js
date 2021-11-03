const articles = [ 
    {
        id: 1,
        denomination: "Alienware Aurora R12-295",
        marque: 'Alienware',
        Processeur: 'Intel Core i7-11700KF',
        dispo: 'EN STOCK',
        price: 2199.95,
        img: 'img/PCFIXE1.jpg',
        type: 'FIXE',
        url : "01 - pc_fixe.html",
        imgUrl : "Alienware_fixe.html",
    },
    {
        id: 2,
        denomination: "Alienware m15 R6-198",
        marque: 'Alienware',
        Processeur: 'Intel Core i7-11800H',
        dispo: 'EN STOCK',
        price: 2599.95,
        img: 'img/PCPORTABLE1.jpg',
        type: 'PORTABLE',
        url : "02 - pc_portables.html",
        
    }
]

let panier = [];

const displayArticle = () =>
 {const articlesNodes = articles.map ((article) => {
    return createArticle(article)
});
app.append(...articlesNodes)
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
const link = document.createElement('a');
link.href = article.url;
const linkImage = document.createElement('a');
linkImage.href = article.imgUrl;



divArticle.classList.add('article');
image.src = article.img;
image.alt = article.marque;
div2.classList.add('article2');


h2.innerText = article.denomination;
h2.style.textAlign = 'center'
p.innerText = article.type;
p.style.backgroundColor = 'orange'
p.style.textAlign = 'center'
p.style.color = 'black'
link.style.textDecoration = 'none'



linkImage.appendChild(image)
link.appendChild(p);
divArticle.append(h2,linkImage, link);


return divArticle;

}

displayArticle()








