const poneys = [{ name: 'Pinky Pie', strength: '50', speed: '65', charisma: '80' }, 
{ name: 'Rainbow Dash', strength: '80', speed: '75', charisma: '90' }, 
{ name: 'Twilight Sparkle', strength: '90', speed: '45', charisma: '70'}, 
{ name: 'Rarity', strength: '30', speed: '50', charisma: '85' }, 
{ name: 'Fluttershy', strength: '67', speed: '64', charisma: '30' }];
  
// let image = [];

// for (let i = 0; i < 4; i++) {
//     image[i] = '/img/pony' + (i+2) + '.png';
// }  

/******** START FONCTIONS *********/

function translate() {
    panneau.style.transform = 'translateX('+ p * 300 +'px)';
};

function masquer() {
    if (p == 2) {
        document.getElementById('left').src='./img/arrowDis.png';
    } else {
        document.getElementById('left').src='./img/arrow.png';
    };

    if (p == -2) {
        document.getElementById('right').src='./img/leftDis.png';
    } else {
        document.getElementById('right').src='./img/right.png';
    };
};

/******** END FONCTIONS *********/


let nombre = 5;
let p = 0;
const carrousel = document.getElementById('carrousel');
const panneau = document.getElementById('panneau');
const left = document.getElementById('left');
const right = document.getElementById('right');

carrousel.style.width = 300 + 'px';

for (let i = 0; i < nombre; i++) {
    let div = document.createElement('div');
    div.classList.add('poney');
    let img = document.createElement('img');
    div.append(img);
    img.src = './img/pony' + (i+1) + '.png';
    panneau.append(div);
};

left.addEventListener('click', function() {
    if(p < 2) {
        p++;
    };
    translate();
    masquer();
});

right.addEventListener('click', function() {
    if(p > -2) {
        p--;
    };
    translate();
    masquer();
});

// let poney = document.querySelectorAll('.poney div');
// poney.forEach(poney => {
//     div.addEventListener('mouseover', () => {
//         div.classList.add('hover');
//     });
// });

// console.log(poney);

// let poney = document.querySelectorAll('.poney');
// poney.addEventListener('mouseover',() => {
//     div.style.backgroundColor = 'purple';
// });

let poney = document.querySelectorAll('.poney');

poney.forEach(poney => {
    let div2 = document.createElement('div');
    div2.classList.add('hover');
    poney.append(div2);
    let hover = document.querySelector('.hover');
    let h3 = document.createElement('h3');
    h3.innerText = poneys.name;
    hover.append(h3);
});


// let poney = document.querySelectorAll('.poney');

// for (let i = 0; i < nombre; i++) {
//     let div2 = document.createElement('div');
//     div2.classList.add('.hover');
//     poney.append(div2);
// }