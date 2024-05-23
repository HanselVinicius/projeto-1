export async function getAnimesList(request) {
    let anime = await _makeRequest(request);
    return anime;
}


async function _makeRequest(request) {
    try {
        return _handleResponse(request);
    } catch (error) {
        return null;
    }
}

async function _handleResponse(request){
    let response = await fetch(request);
        if (!response.ok)
            throw new Error('Network response was not ok ' + response.statusText);
        
    let data = await response.json();
    return data;
}