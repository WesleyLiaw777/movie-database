function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function goHome() {
    window.location = '/index.html'
}

function searchKeyword(event){
    if (event.keyCode == 13) { //enter key
        if (event.target.value !== ""){
            localStorage.setItem("keyword", event.target.value);
            window.location.href = `${window.location.origin}/search.html`
        }
        else{ window.alert("Please enter a word to begin the search.")}
    }
}

function searchButton(id){
    if (document.getElementById(id).value !== "") {
        localStorage.setItem("keyword", document.getElementById(id).value);
        window.location.href = `${window.location.origin}/search.html`
    }
    else{ window.alert("Please enter a word to start the search.")}
}