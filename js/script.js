const content = document.getElementById("content")



//await makes sure the line is executed before running next line
//await must be within async
//fetching api link with data like title and images



async function getData() {
    const response = await fetch("https://ghibliapi.vercel.app/films")
    const data = await response.json()
    console.log(data)

    content.innerHTML = (data.map((movie) => {
        return (
        `
        <div class="movie-card"> 
        <h2>${movie.title} (${movie.release_date})</h2>
        <p><b>Original title:</b> ${movie.original_title} (${movie.original_title_romanised})</p>
        <p><b>Director:</b> ${movie.director}</p>
        <img src="${movie.image}" />
            <div class="description">
            <p>${movie.description}</p>
            </div>
        </div>
        
        `
        )
    }).join("<hr>"))

};
getData()


