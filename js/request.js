export async function getAnimesList(request) {
    return await _handleResponse(request);
}

async function _handleResponse(request){
    let response = await fetch(request);
        if (!response.ok)
            throw new Error('Network response was not ok ' + response.statusText);
        
    let data = await response.json();
    return data;
}