const movies = [
    {
        title: "Ballerina",
        year: 2016,
        genre: "Animation",
        poster: "78c90948-699a-4143-8b42-01ac4fbf96c4.jpeg"
    }, {
       title: "Bolt",
        year: 2008,
        genre: "Animation",
        poster: "822bb182-4a92-4d4c-91c1-395b37187204.jpeg"
    }, {
       title: "Spider-Man: Across the spiderverse",
        year: 2018,
        genre: "SCI-FI",
        poster : "spiderman.jpeg"
    }, {
       title: "The Bad Guys",
        year: 2022,
        genre: "Animation",
        poster: "badguys.jpeg"
    }, {
       title: "Spies in disguise",
        year: 2019,
        genre: "Action",
        poster: "spies.jpeg"
    }, {
       title: "Raya and the last Dragon",
        year: 2021,
        genre: "Action",
        poster: "raya.jpeg"
    }, {
       title: "Sonic the Hedgehog 3",
        year: 2024,
        genre: "Action",
        poster: "sonic.jpeg"
    }, {
       title: "The Call",
        year: 2020,
        genre: "Thriller",
        poster: "thecall.jpeg"
    }, {
       title: "Warning: DO NOT PLAY",
        year: 2019,
        genre: "Thriller",
        poster: "warning.jpeg"
    }, {
       title: "Orphan",
        year: 2009,
        genre: "Horror",
        poster: "orphan.jpeg"
    }, {
       title: "Coraline",
        year: 2009,
        genre: "Horror",
        poster: "coraline.jpeg"
    }, 

];

let dom_container = document.querySelector(".dom-container");
let all = document.querySelector("#all");
let action = document.querySelector("#action");
let thriller = document.querySelector("#thriller");
let animation = document.querySelector("#animation");
let horror = document.querySelector("#horror");
let sci_fi = document.querySelector("#sci-fi");

let showData = ((movies) => {
    dom_container.innerHTML = movies.map((movie) => `
<div class="main">
<div class="hover_effect">
<img src=${movie.poster} class="img">
</div>
<h5>${movie.title}</h5>
<p>${movie.year}</p>
</div>

`).join("");
})

showData(movies);

all.addEventListener('click', ()=>{
    showData(movies)
})
action.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie) => movie.genre === "Action")
    showData(newMovie)
})
thriller.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie) => movie.genre === "Thriller")
    showData(newMovie)
})
animation.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie) => movie.genre === "Animation")
    showData(newMovie)
})
horror.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie) => movie.genre === "Horror")
    showData(newMovie)
})
sci_fi.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie) => movie.genre === "SCI-FI")
    showData(newMovie)
})





