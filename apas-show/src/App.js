import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Header from './components/Header/Index';
import Main from './pages/main/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
