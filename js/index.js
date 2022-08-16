const poneys = [{ name: 'Pinky Pie', strength: '50', speed: '65', charisma: '80' }, 
{ name: 'Rainbow Dash', strength: '80', speed: '75', charisma: '90' }, 
{ name: 'Twilight Sparkle', strength: '90', speed: '45', charisma: '70'}, 
{ name: 'Rarity', strength: '30', speed: '50', charisma: '85' }, 
{ name: 'Fluttershy', strength: '67', speed: '64', charisma: '30' }];
  
let image = [];

// for (let i = 0; i < 4; i++) {
//     image[i] = '/img/pony' + (i+2) + '.png';
// }  

document.body.onload=function() {
    nombre = 5;
    p = 0;
    carrousel = document.getElementById('carrousel');
    left = document.getElementById('left');
    right = document.getElementById('right');

    for (let i = 0; i < nombre; i++) {
        let div = document.createElement('div');
        div.classList.add('poney');
        let img = document.createElement('img');
        div.append(img);
        img.src = '/img/pony' + (i+1) + '.png';
        carrousel.append(div);
    }   
}

left.onclick=function() {
    p--;
}