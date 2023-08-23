import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18n.init({
  // interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
          navbar: require("./translation/en/navbar.json"),
          footer: require("./translation/en/footer.json"),
          ourstory: require("./translation/en/ourstory.json"),
          ourwines: require("./translation/en/ourwines.json"),
          legalnotice: require("./translation/en/legalnotice.json"),
          privacypolicy: require("./translation/en/privacypolicy.json"),
      },
      fr: {
          navbar: require("./translation/fr/navbar.json"),
          footer: require("./translation/fr/footer.json"),
          ourstory: require("./translation/fr/ourstory.json"),
          ourwines: require("./translation/fr/ourwines.json"),
          legalnotice: require("./translation/fr/legalnotice.json"),
          privacypolicy: require("./translation/fr/privacypolicy.json"),
      },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />    
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
