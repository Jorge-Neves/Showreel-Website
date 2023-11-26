import React from 'react';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header-test">
        <div className="logo-test">
          <span>Logo</span>
        </div>
        <div className="button-container-test">
          <div className="button-test">Button</div>
          <div className="button-test">Button</div>
          <div className="button-test">Button</div>
          <div className="button-test">Button</div>
        </div>
      </header>
      <div className="content-test">
        <div className="play-button-test">
          <div className="play-button-arrow-right-test" />
        </div>
      </div>
      <div className="contacts-section-test">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
