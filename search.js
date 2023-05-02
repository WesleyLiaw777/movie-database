// https://www.omdbapi.com/?apikey=e4584088&s=matrix

let movies;
let spinnerSwitch = false;
let toggleHTML = `<i id="spinner" class="fas fa-spinner movies__loading--spinner"></i>`
let keyword = localStorage.getItem("keyword");

const movieList = document.querySelector(`.movie-list`)

if (keyword !== '' && keyword !== null) {
    fetchMovies(keyword);
}

async function fetchMovies(keyword){
    console.log('fetchmovies');
    document.querySelector(`.display__heading`).style.display = 'none';
    toggleSpinner();
    
    const movies = await fetch(`https://www.omdbapi.com/?apikey=e4584088&s=${keyword}`)
    const moviesData = await movies.json();
    const firstSix = moviesData.Search.slice(0,6);
    
    const moviesHTML = firstSix.map(movie => {
        return `
        <div class="movie">
        <figure class="movie__poster--wrapper">
        <img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}">
        </figure>
        <div class="movie__info">
        <h4 class="movie__title">${movie.Title}</h4>
        <h5>${movie.Year}</h5>
        </div>
        </div>`
    }).join('');

    setTimeout(() => {
        // movieList.classList.remove('movies__loading');
        toggleSpinner();
        movieList.innerHTML = moviesHTML;
        localStorage.clear();
        }, 1000);
}

function toggleSpinner() {
    spinnerSwitch = !spinnerSwitch;
    if(spinnerSwitch) {
        movieList.innerHTML = toggleHTML;
        movieList.classList += (' movies__loading')
    }
    else{
        movieList.classList.remove('movies__loading');
    }
}

function searchKeyword(event){
    if (event.keyCode == 13) { //enter key
        if (event.target.value !== ""){
            fetchMovies(event.target.value);
            document.querySelector(`.display__heading`).style.display = 'none';
        }
        else{ window.alert("Please enter a word to begin the search.")}
    }
}

function searchButton(id){
    if (document.getElementById(id).value !== "") {
        fetchMovies(document.getElementById(id).value);
        document.querySelector(`.display__heading`).style.display = 'none';
        localStorage.setItem("keyword", document.getElementById(id).value);
    }
    else{ window.alert("Please enter a word to start the search.")}
}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function goHome() {
    window.location = '/index.html'
}
