import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
      <div className="app" id="app">
        <ScrollToTop />
        <Navbar />
          <div className='app-container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/legalnotice" element={<LegalNotice />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />}  />
            </Routes>
          </div>
        <Footer />
      </div>
  );
}

export default App;
