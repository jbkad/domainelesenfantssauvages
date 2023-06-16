import './App.css';
// import Home from './components/Home';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
      <div id="app">
        <Navbar />
        <br />
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legalnotice" element={<LegalNotice />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />}  />
            {/* <Route path="login" element={<Login />} /> */}
          </Routes>
        </div>
        <br />
        <Footer />
      </div>
  );
}

export default App;
