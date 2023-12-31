import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './components/Home';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <LanguageSwitcher />
        <Home />
      </div>
    </I18nextProvider>
  );
}

export default App;
