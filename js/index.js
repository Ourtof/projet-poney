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
    if (y == 2) {
        document.getElementById('left').src='./img/arrowDis.png';
    } else {
        document.getElementById('left').src='./img/arrow.png';
    };

    if (y == -2) {
        document.getElementById('right').src='./img/leftDis.png';
    } else {
        document.getElementById('right').src='./img/right.png';
    };
};

function bar(myDiv, myArray, myPoney) {
    
        let divContain = document.createElement('div');
        //creation wrapper stat poney
        let wrapperStrength = document.createElement('div');
        let wrapperSpeed = document.createElement('div');
        let wrapperCharisma = document.createElement('div');

        let strengthSpan = document.createElement('span');
        let speedSpan = document.createElement('span');
        let charismaSpan = document.createElement('span');

        divContain.classList.add('contain');

        //creation barres colorées des stats
        let strengthBar = document.createElement('div');
        let speedBar = document.createElement('div');
        let charismaBar = document.createElement('div');

        strengthSpan.innerText = 'Force :';
        speedSpan.innerText = 'Vitesse :';
        charismaSpan.innerText = 'Charisme :';
    

        strengthBar.classList.add('valueBar');
        wrapperStrength.append(strengthBar);
        speedBar.classList.add('valueBar');
        wrapperSpeed.append(speedBar);
        charismaBar.classList.add('valueBar');
        wrapperCharisma.append(charismaBar);

        //assignation des valeurs des stats au style des barres colorées
        strengthBar.style.width = myPoney.strength + '%';
        speedBar.style.width = myPoney.speed + '%';
        charismaBar.style.width = myPoney.charisma + '%';

        wrapperStrength.classList.add('bar');
        wrapperCharisma.classList.add('bar');
        wrapperSpeed.classList.add('bar');

        myDiv.append(divContain);
        divContain.append(strengthSpan);
        divContain.append(wrapperStrength);
        divContain.append(speedSpan);
        divContain.append(wrapperSpeed);
        divContain.append(charismaSpan);
        divContain.append(wrapperCharisma);
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
const carac = ['Vitesse :', 'Force :', 'Charisme :'];



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
    let h2 = document.createElement('h2');
    h2.innerText = poneys[i].name;
    div2.prepend(h2);
    let p = document.createElement('p');
    p.innerText = resume[i];
    div2.append(p);



    // jauge
    bar(div2, carac, poneys[i]);
    
};

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



function addition(a,b){
    return a + b;
}

let resultat = addition(45,65)