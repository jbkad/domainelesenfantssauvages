import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
      <div id="app">
        {/* <div className='app-content'> */}
          <Navbar />
          <br />
          <div className='app-container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/legalnotice" element={<LegalNotice />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />}  />
            </Routes>
          </div>
          <br />
          <Footer />
        </div>
      // </div>
  );
}

export default App;
