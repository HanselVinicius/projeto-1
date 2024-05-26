export class AnimeAPI {
    constructor() {
        this.url = 'https://api.jikan.moe/v4';
    }

    async getAnimes({type, limit, sfw, filter}) {
        const response = await fetch(`${this.url}/top/anime?type=${type}&limit=${limit}&sfw=${sfw}&filter=${filter}`);
        const data = await response.json();
        return data;
    }
}