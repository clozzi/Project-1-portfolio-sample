document.addEventListener("DOMContentLoaded", fetchMeal());
document.addEventListener('DOMContentLoaded', countUp());


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