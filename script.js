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

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id)
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(data))
}

const slothFacts = [
    {
      id: 1,
      category: "diet",
      fact: "Sloths are primarily folivores, feeding mostly on leaves, fruits and sap of various trees. They have a large and efficient multi-chambered stomach that helps with digesting tough, fibrous leaves."  
    },
    {
        id: 2,
        category: "habitat",
        fact: "All modern day sloths are tree-dwelling, suspensorial mammals, spending most of their lives hanging motionless or slowly moving between tree branches using their long, curved claws. Everything from feeding, sleeping, resting to mating and giving birth happens in the trees."
    },
    {
        id: 3,
        category: "habitat",
        fact: "Life can be difficult on the ground for sloths since their long clawed arms and shorter, weak hind legs make it impossible to stand on all fours. However, they are surprisingly strong swimmers. Sloth species living near mangroves or rivers sometimes drop into water bodies and swim large distances (in a short amount of time) when searching for potential mating partners or seeking new territory."
    },
    {
        id: 4,
        category: "miscellaneous",
        fact: "Sloths have been around for 65.5 million years—just before dinosaurs disappeared—shows that a slow-paced lifestyle can be a good survival strategy in the wild."
    },
    {
        id: 5,
        category: "diet",
        fact: "The extinct giant ground sloths were some of the only mammals that had digestive systems large enough to process the huge avocado seeds whole. They feasted on the fruit and then dispersed the seeds far and wide. So without sloths, there would be no avocados!"
    }
]

document.getElementById('thirdChance').addEventListener('drop', () => {
    let randomNmbr = Math.floor(Math.random() * 4)
    alert (slothFacts[`${randomNmbr}`]["fact"])
})

document.addEventListener('DOMContentLoaded', () => {
    perSecond = setInterval(function() {counter.innerText++}, 1000)
});