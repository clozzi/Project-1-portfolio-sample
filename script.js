darkMode.addEventListener('click', iAmBatman)
function iAmBatman() {
    document.body.style.background = "black";
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "gainsboro";
      });
    document.getElementById('firstChance').style.borderColor = "white";
    document.getElementById('secondChance').style.borderColor = "white";
    document.getElementById('thirdChance').style.borderColor = "white";
    document.getElementById('fourthChance').style.borderColor = "white";
    document.getElementById('fifthChance').style.borderColor = "white";
}

lightMode.addEventListener('click', hereComesTheSun)
function hereComesTheSun() {
    document.body.style.background = "white";
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "black";
      });
    document.getElementById('firstChance').style.borderColor = "black";
    document.getElementById('secondChance').style.borderColor = "black";
    document.getElementById('thirdChance').style.borderColor = "black";
    document.getElementById('fourthChance').style.borderColor = "black";
    document.getElementById('fifthChance').style.borderColor = "black";
    
}

document.addEventListener('DOMContentLoaded', fetchJoke());
function fetchJoke() {
    fetch ("http://localhost:3000/jokes")
        .then (res => res.json())
        .then ((data) => {
            let joke = document.getElementById('joke')
            let randomNmbr = Math.floor(Math.random() * 5)
            joke.textContent = data[randomNmbr]['joke']
        })
}

const luckyArray = [1, 1, 1, 1, 1]
function luckyNumber() {
    let luckyNoP = document.getElementById('luckyNoP')
    let newLuckyArr = [];
    luckyArray.forEach((el) => {
        let randomNmbr = Math.random();
        let randomized = el * randomNmbr * 10;
        let rounded = Math.floor(randomized)
        newLuckyArr.push(rounded)
    })
    luckyNoP.innerHTML = newLuckyArr.reduce((acc, curr) => acc + curr, 0);
}

document.addEventListener("DOMContentLoaded", fetchMeal());
function fetchMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        let mealName = data.meals[0].strMeal;
        let mealSource = document.createElement('a');
        mealSource.href = `${data.meals[0].strSource}`
        mealSource.textContent = "Get the recipe here!"
        let name = document.getElementById('mealName');
        let mealDiv = document.getElementById('mealOTD');
        let lineBreak = document.createElement('br');
        mealDiv.append(lineBreak);
        name.append(mealName);
        mealDiv.append(mealSource);
        mealPic.src = data.meals[0].strMealThumb;
    });
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text')
    ev.target.appendChild(document.getElementById(data))
}

document.addEventListener('DOMContentLoaded', () => {
    perSecond = setInterval(function() {counter.innerText++}, 1000)
});