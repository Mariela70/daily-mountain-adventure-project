import { AuthProvider } from "./contexts/AuthContext";
import { AdventureProvider } from "./contexts/AdventureContext";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import PrivateRoute from "./components/common/PrivateRoute";
import { Routes, Route } from 'react-router-dom';
import AdventureDetails from './components/AdventureDetails/AdventureDetails';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";
import { Footer } from "./components/Footer/Footer";

function App() {
  
  return (
    <AuthProvider >
      <Header />
      <main id="main-content">
        <AdventureProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:adventureId" element={<AdventureDetails />} />
            <Route path="/adventures/:adventureId/edit" element={<PrivateRoute><Edit /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><Create  /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </AdventureProvider>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
