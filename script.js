const searchBtn = document.querySelector(".search-btn")
const homeBtn = document.querySelector(".home")
const genre = document.querySelector(".genre")
const country = document.querySelector(".country")
const about = document.querySelector(".about")

searchBtn.addEventListener("click", () => {
    console.log("Searching for movie")
})

fetch("https://api.themoviedb.org")
.then(res => res.json)
.then(data => console.log(data))