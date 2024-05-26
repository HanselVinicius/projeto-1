import { AnimeAPI } from "./api_jikan.js";
import { populateScreen } from './populate_screen.js';

const api = new AnimeAPI();

addEventListener("DOMContentLoaded", async (_event) => {
    const animes = await api.getAnimes({
        type: "tv",
        limit: 10,
        sfw: true,
        filter: "favorite"
    })

    populateScreen(animes.data);
});
