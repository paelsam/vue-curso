const apiKey = 'omU8218SyA1w41sQoQohCH1dSecIw7N1';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});

export default giphyApi;