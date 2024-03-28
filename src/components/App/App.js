import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from '../PageNotFound/PageNotFound';
import { Navigate, Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { authorize, register, checkToken } from '../../utils/Auth';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn]= useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState("");
  const [isErrorRegister, setIsErrorRegister] = useState("");
  const [isErrorProfile, setIsErrorProfile] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleTokenCheck();
   }, [])

  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        mainApi.getCurrentUserInfo(), 
        mainApi.getInitialMovies(),
      ])
         .then((results) => {
          setCurrentUser(results[0])
          setSavedMovies(results[1])
         })
         .catch((err) => {
          console.log(err);
         });
    }
  },[loggedIn]);

  useEffect(() => {
    if (location.pathname !== "/profile") {
    setIsEdit(false);
    }
  }, [location]);

  function handleUpdateUser(userInfo) {
    mainApi.updateUserInfo(userInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsError(false);
        setIsEdit(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsEdit(true);
        if (Number(err.substr(err.length - 3)) === 409) {
          setIsErrorProfile("Пользователь с таким email уже существует.");
        };
        if (Number(err.substr(err.length - 3)) === 400) {
          setIsErrorProfile("Переданы некорректные данные");
        };
        if (Number(err.substr(err.length - 3)) === 500) {
          setIsErrorProfile("При обновлении профиля произошла ошибка.");
        };
        console.log(err);
      });
  }
 
  function handleRegisterSubmit({ password, email, name }) {
    register(password, email, name)
      .then((res) => {
        if (res) {
          handleLoginSubmit({ password, email })
          setIsError(false);
        }
      })
      .catch((err) => {
        setIsError(true);
        if (Number(err.substr(err.length - 3)) === 409) {
          setIsErrorRegister("Пользователь с таким email уже существует.");
        };
        if (Number(err.substr(err.length - 3)) === 500) {
          setIsErrorRegister("При регистрации пользователя произошла ошибка.");
        };
        console.log(err);
      });
  }

  function handleTokenCheck () {
    if (localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      checkToken(token)
        .then((res) => {
          if (res){
            setLoggedIn(true);
            navigate("/movies", {replace: true})
          }
        })
        .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        });
    }
  }

  function handleLogout() {
    setCurrentUser({})
    localStorage.clear();
    setLoggedIn(false);
    setIsError(false);
  }

  function handleLoginSubmit({ password, email }) {
    authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          navigate("/movies", {replace: true});
          setIsError(false);
        }
      })
      .catch((err) => {
        setIsError(true);
        setIsErrorLogin("Вы ввели неправильный логин или пароль.");
        console.log(err);
      });
  }

  function handleMovieLike(movie) {
    const isLiked = savedMovies.some(m => movie.id === m.movieId);
    const clickMovie = savedMovies.filter((m) => {
      return m.movieId === movie.id
    })

    if (isLiked) {
      handleMovieDelete(clickMovie[0])
    } else {
      mainApi.createNewMovie(movie)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleMovieDelete(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((m) => m._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClickLoginLink () {
    setIsError(false);
  }

  function handleClickEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={loggedIn ? <Movies savedMovies={savedMovies} loggedIn={loggedIn} onMovieLike = {handleMovieLike} /> : <Navigate to="/" replace />} />
          <Route path="/movies" element= {<ProtectedRoute element={Movies} loggedIn={loggedIn} />} />
          <Route path="/saved-movies" element={loggedIn ? <SavedMovies savedMovies={savedMovies} loggedIn={loggedIn} onMovieDelete = {handleMovieDelete} /> : <Navigate to="/" replace />} />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />} />
          <Route path="/profile" element={loggedIn ? <Profile loggedIn={loggedIn} onLogout={handleLogout} onUpdateUser={handleUpdateUser} isError={isError} isErrorProfile={isErrorProfile} isEdit={isEdit} handleClickEdit={handleClickEdit}
           /> : <Navigate to="/" replace />} />
          <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn} />} />
          <Route path="/signin" element={ <Login onSubmit = {handleLoginSubmit} isError={isError} isErrorLogin={isErrorLogin} handleClickLoginLink={handleClickLoginLink} />} />
          <Route path="/signup" element={ <Register onSubmit={handleRegisterSubmit} isError={isError} isErrorRegister={isErrorRegister} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
