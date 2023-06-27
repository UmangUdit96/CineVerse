'use strict';

const api_key = 'bf7b5023ad502540da1dfaf758e5a9cb';
const imageBaseURL = 'https://image.tmdb.org/t/p/';
// 2:10:32
// Fetch data from a server using the 'url' and passes
// the result in JSON data to a 'callback' function,
// along with an optional parameter if has 'optionParam'

const fetchDataFromServer = function(url, callback, optionParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionParam));
}
export { imageBaseURL, api_key, fetchDataFromServer };