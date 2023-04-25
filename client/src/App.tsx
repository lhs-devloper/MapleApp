import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Footer from './components/footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Headers />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
