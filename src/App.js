import { useEffect, useState } from "react";
import * as adventureService from '../src/services/adventureService';
import { AuthProvider } from "./contexts/AuthContext";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import PrivateRoute from "./components/common/PrivateRoute";

import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AdventureDetails from './components/AdventureDetails/AdventureDetails';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';

import Edit from './components/Edit/Edit';
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";

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

  const adventureDelete = (adventureId) => {
    setAdventure(state => state.filter(x => x._id !== adventureId));
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
          <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
          <Route path="/catalog" element={<Catalog adventures={adventures} />} />
          <Route path="/catalog/:adventureId" element={<AdventureDetails adventures={adventures} adventureDelete={adventureDelete} />} />
          <Route path="/adventures/:adventureId/edit" element={<PrivateRoute><Edit adventureEdit={adventureEdit} /></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><Create addAdventureHandler={addAdventureHandler} /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile adventures={adventures} /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
