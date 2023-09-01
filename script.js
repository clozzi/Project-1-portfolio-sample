document.addEventListener("DOMContentLoaded", fetchMeal());
document.addEventListener('DOMContentLoaded', countUp());
document.addEventListener('DOMContentLoaded', fetchJoke());


function fetchMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => displayMeal(data));
}

function displayMeal(data) {
    let mealName = data.meals[0].strMeal;
    let name = document.getElementById('mealName');
    name.append(mealName);
    mealPic.src = data.meals[0].strMealThumb;
}


function countUp() {
    perSecond = setInterval(function() {counter.innerText++}, 1000)
}

function fetchJoke() {
    console.log("hi")
    fetch ("http://localhost:3000/jokes")
        .then ((res) => res.json())
        .then ((data) => displayJoke(data))
}

function displayJoke(data) {
    console.log(data[0]["joke"])
    let joke = document.getElementById('joke')
    let randomNmbr = Math.floor(Math.random() * 5)
    joke.textContent = data[randomNmbr]['joke']
}

darkMode.addEventListener('click', iAmBatman)

 function iAmBatman() {
    document.body.style.background = "black";
    //document.getElementById("joke").style.color = 'white';
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "gainsboro";
      });
}

lightMode.addEventListener('click', hereComesTheSun)

 function hereComesTheSun() {
    document.body.style.background = "white";
    //document.getElementById("joke").style.color = 'white';
    document.querySelectorAll("*").forEach(element => {
        element.style.color = "black";
      });
}