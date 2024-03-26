class MoviesApi {
    constructor({baseUrl}) {
      this._baseUrl = baseUrl;
    }

    getMovies() {
     const url = `${this._baseUrl}`;
 
     return fetch(url, {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json'
       },
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
});

export default moviesApi