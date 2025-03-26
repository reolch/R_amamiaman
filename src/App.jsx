import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import StoreInformation from './pages/StoreInformationPage/StoreInformationPage';
import OurPassionPage from './pages/OurPassionPage/OurPassionPage';
import Snorkelling from './pages/SnorkellingPage/SnorkellingPage';
import SeaKayakPage from './pages/SeaKayakPage/SeakayakPage';
import GlassBoatPage from './pages/GlassBoatPage/GlassBoatPage';
import LodgingPage from './pages/LodgingPage/LodgingPage';
import OtherFacilitiesPage from './pages/OtherFacilities/OtherFacilitiesPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/access" element={<StoreInformation />} />
            <Route path="/passion" element={<OurPassionPage />} />
            <Route path="/snorkelling" element={<Snorkelling />} />
            <Route path="/seaKayak" element={<SeaKayakPage />} />
            <Route path="/glassboat" element={<GlassBoatPage />} />
            <Route path="/lodging" element={<LodgingPage />} />
            <Route path="/other" element={<OtherFacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
