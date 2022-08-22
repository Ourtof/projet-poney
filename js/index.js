const poneys = [{ name: 'Pinky Pie', strength: '50', speed: '65', charisma: '80' }, 
{ name: 'Rainbow Dash', strength: '80', speed: '75', charisma: '90' }, 
{ name: 'Twilight Sparkle', strength: '90', speed: '45', charisma: '70'}, 
{ name: 'Rarity', strength: '30', speed: '50', charisma: '85' }, 
{ name: 'Fluttershy', strength: '67', speed: '64', charisma: '30' }];

/******** START FONCTIONS *********/

function translate() {
    panneau.style.transform = 'translateX('+ y * 300 +'px)';
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


let y = 0;
const carrousel = document.getElementById('carrousel');
const panneau = document.getElementById('panneau');
const left = document.getElementById('left');
const right = document.getElementById('right');

carrousel.style.width = 300 + 'px';

let poney = document.querySelectorAll('.poney');
let jauge = document.querySelectorAll('.jauge');
const resume = ["I'm Pinkie Pie", "I'm Rainbow Dash", "I'm Twilight Sparkle", "I'm Rarity", "I'm Fluttershy"];

for (let i = 0; i < poneys.length; i++) {
    let div = document.createElement('div');
    div.classList.add('poney');
    let img = document.createElement('img');
    div.append(img);
    img.src = './img/pony' + (i+1) + '.png';
    panneau.append(div);


    // Partie Hover
    let div2 = document.createElement('div');
    div2.classList.add('hover');
    div.append(div2);
    h3 = document.createElement('h3');
    h3.innerText = poneys[i].name;
    div2.prepend(h3);
    let p = document.createElement('p');
    p.innerText = resume[i];
    div2.append(p);
    let div3 = document.createElement('div');
    div3.classList.add('jauge');
    div.append(div3);
    console.log(div3);
};



// poneys.forEach(poney => {
//     let div2 = document.createElement('div');
//     div2.classList.add('hover');
//     poneys.append(div2);
// });


left.addEventListener('click', function() {
    if(y < 2) {
        y++;
    };
    translate();
    masquer();
});

right.addEventListener('click', function() {
    if(y > -2) {
        y--;
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


// let poney = document.querySelectorAll('.poney');
// poney.addEventListener('mouseover',() => {
//     div.style.backgroundColor = 'purple';
// });



// poney.forEach(poney => {
//     let div2 = document.createElement('div');
//     div2.classList.add('hover');
//     poney.append(div2);
//     let hover = document.querySelector('.hover');
//     let h3 = document.createElement('h3');
//     h3.innerText = poneys.name;
//     hover.append(h3);
// });


// let poney = document.querySelectorAll('.poney');

// for (let i = 0; i < nombre; i++) {
//     let div2 = document.createElement('div');
//     div2.classList.add('.hover');
//     poney.append(div2);
// }