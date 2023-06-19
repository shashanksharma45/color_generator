const colors = ["green", "red", "rgba(157, 159, 92)", "#d335df"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const getRandom = getRandomNumber();
    document.body.style.background = colors[getRandom];
    color.textContent = colors[getRandom]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}