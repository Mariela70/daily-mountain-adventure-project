import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Detaials from './components/Details/Details';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Detaials />} />
          <Route path="/" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
