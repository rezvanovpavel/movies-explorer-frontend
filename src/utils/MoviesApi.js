class MoviesApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    getMovies() {
     const url = `${this._baseUrl}`;
 
     return fetch(url, {
       method: 'GET',
       headers: this._headers,
     })
     .then(res => this._checkResponseStatusServer(res));
    }

   _checkResponseStatusServer(res) {
      if (res.ok) {
       return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi