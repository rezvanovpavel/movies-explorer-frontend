class MainApi {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    getCurrentUserInfo() {
     const url = `${this._baseUrl}/users/me`;
 
     return fetch(url, {
       method: 'GET',
       headers: this._headers,
     })
     .then(res => this._checkResponseStatusServer(res));
    }

    getInitialMovies() {
     const url = `${this._baseUrl}/movies`;
 
     return fetch(url, {
       method: 'GET',
       headers: this._headers,
     })
     .then(res => this._checkResponseStatusServer(res));
    }
   
    updateUserInfo({name,email}) {
     const url = `${this._baseUrl}/users/me`;
     return fetch(url, {
       method: 'PATCH',
       headers: this._headers,
       body: JSON.stringify({
        name: name,
        email: email
      })
     })
     .then(res => this._checkResponseStatusServer(res));
    } 

    createNewMovie(data) {
     const url = `${this._baseUrl}/movies`;
 
     return fetch(url, {
       method: 'POST',
       headers: this._headers,
       body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      })
     })
     .then(res => this._checkResponseStatusServer(res));
    }

    deleteMovie(movieId) {
     const url = `${this._baseUrl}/movies/${movieId}`;
 
     return fetch(url, {
       method: 'DELETE',
       headers: this._headers
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

const mainApi = new MainApi({
  baseUrl: 'https://api.moviesrez.nomoredomainswork.ru',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});

export default mainApi