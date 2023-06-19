const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hex = "#";

    for(let i=1; i<=6; i++){
        hex += colors[getRandomNumber()]; 
    }

    document.body.style.background = hex;
    color.textContent = hex;
})

function getRandomNumber (){
    return Math.floor(Math.random() * colors.length);
}