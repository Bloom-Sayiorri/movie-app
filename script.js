const dotenv = require('dotenv')

const searchBtn = document.querySelector(".search-btn")
const homeBtn = document.querySelector(".home")
const genre = document.querySelector(".genre")
const country = document.querySelector(".country")
const about = document.querySelector(".about")

dotenv.config()
const url = process.env.API_KEY
const apiKey = process.env.API_ACCESS_TOKEN

// Get all Movies
async function getMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
    };

    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error("Network response was not ok.")
        }
        return await response.json()
    } catch (error) {
        return null
    }
}

// Search for  a Movie using id
function searchMovie() {
    searchBtn.addEventListener("click", () => {
        console.log("Searching for movie")
    })
}