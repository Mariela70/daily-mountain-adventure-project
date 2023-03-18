import { useEffect, useState } from "react";
import * as adventureService from '../src/services/adventureService';
import { AuthContext } from "./contexts/AuthContext";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdventureDetails from './components/AdventureDetails/AdventureDetails';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';

import Edit from './components/Edit/Edit';
import Logout from "./components/Logout/Logout";

function App() {
  const [adventures, setAdventure] = useState([]);
  const [auth, setAuth] = useState({});

  const userLoginHandler = (authData) => {
    setAuth(authData);
  };
  const userLogoutHandler = () => {
    setAuth({});
  };

  useEffect(() => {
    adventureService.getAll()
      .then(result => {
        setAdventure(result);
      });
  }, []);
  return (
    <AuthContext.Provider value={{user: auth, userLoginHandler, userLogoutHandler}}>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home adventures={adventures} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog" element={<Catalog adventures={adventures} />} />
          <Route path="/catalog/:adventureId" element={<AdventureDetails AdventureDetails={AdventureDetails} />} />
          <Route path="/" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
