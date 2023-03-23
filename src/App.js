import { useEffect, useState } from "react";
import * as adventureService from '../src/services/adventureService';
import { AuthProvider } from "./contexts/AuthContext";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';

import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AdventureDetails from './components/AdventureDetails/AdventureDetails';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';

import Edit from './components/Edit/Edit';
import Logout from "./components/Logout/Logout";

function App() {
  const [adventures, setAdventure] = useState([]);
 

  const navigate = useNavigate();
  

  useEffect(() => {
    adventureService.getAll()
      .then(result => {
        setAdventure(result);
      });
  }, []);

  const adventureEdit = (adventureId, adventureData) => {
    setAdventure(state => state.map(x => x._id === adventureId ? adventureData : x));
  }

  const addAdventureHandler = (adventureData) => {
    setAdventure(state => [
      ...state,
      adventureData,
    ]);
    navigate('/catalog');
  }
  return (
    <AuthProvider >
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home adventures={adventures} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog" element={<Catalog adventures={adventures} />} />
          <Route path="/catalog/:adventureId" element={<AdventureDetails adventures={adventures} />} />
          <Route path="/adventures/:adventureId/edit" element={<Edit adventureEdit={adventureEdit} />} />
          <Route path="/create" element={<Create addAdventureHandler={addAdventureHandler} />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
