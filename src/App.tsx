import React from "react";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header-test">
        <div className="logo-test">
          <span>Logo</span>
        </div>
        <div className="button-container-test">
          <div className="button-test">Navbar Item</div>
          <div className="button-test">Navbar Item</div>
          <div className="button-test">Navbar Item</div>
          <div className="button-test">Navbar Item</div>
        </div>
      </header>
      <header className="App-header">
        <p>Navbar Item</p>
        <p>Navbar Item</p>
        <div>Logo</div>
        <p>Navbar Item</p>
        <p>Navbar Item</p>
      </header>
      <div>
        <p>Hero Section</p>
      </div>
      <div>
        <h1>Section Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima ducimus magnam harum, repellendus tempore odio nam sed error
          asperiores voluptate commodi autem eos dolorum quod eum vel soluta
          fuga.
        </p>
        <div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
          <div>
            <p>Video Thumbnail</p>
            <p>Video Caption</p>
          </div>
        </div>
      </div>
      <div>
        <p>Hero Section</p>
      </div>
      <div>
        <p>Hero Section</p>
      </div>
      <About />
      <div>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
