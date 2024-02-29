import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useState,useEffect } from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
