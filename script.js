darkMode.addEventListener('click', iAmBatman)
function iAmBatman() {
    document.body.style.background = "black";
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "gainsboro";
      });
}

lightMode.addEventListener('click', hereComesTheSun)
function hereComesTheSun() {
    document.body.style.background = "white";
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "black";
      });
    
}

document.addEventListener('DOMContentLoaded', fetchJoke());
function fetchJoke() {
    fetch ("http://localhost:3000/jokes")
        .then (res => res.json())
        .then ((data) => displayJoke(data))
}

function displayJoke(data) {
    console.log(data)
    let joke = document.getElementById('joke')
    let randomNmbr = Math.floor(Math.random() * 5)
    joke.textContent = data[randomNmbr]['joke']
}

document.addEventListener("DOMContentLoaded", fetchMeal());
function fetchMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => displayMeal(data));
}

function displayMeal(data) {
    let mealName = data.meals[0].strMeal;
    let mealSource = data.meals[0].strSource;
    let name = document.getElementById('mealName');
    let source = document.getElementById('mealSource');
    name.append(mealName);
    source.append(mealSource);
    mealPic.src = data.meals[0].strMealThumb;
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

document.addEventListener('DOMContentLoaded', countUp());
function countUp() {
    perSecond = setInterval(function() {counter.innerText++}, 1000)
}