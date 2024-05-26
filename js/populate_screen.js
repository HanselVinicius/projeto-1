export function populateScreen(animes) {
    const animeListContainer = document.getElementById("anime-list");
    animeListContainer.innerHTML = ''; 
    animes.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("col-md-4");
        animeCard.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="${anime.title}">
            <div class="card-body">
              <h5 class="card-title">${anime.title}</h5>
              <p class="card-text">${anime.synopsis || 'No description available.'}</p>
              <a href="${anime.url}" class="btn btn-primary" target="_blank">Assista Agora</a>
            </div>
          </div>
        `;

        animeListContainer.appendChild(animeCard);
    });
}