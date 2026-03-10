import React from 'react';
import './App.css';
import myJpgImage from './assets/cat.jpg';
import { ReactComponent as MySvgImage } from './assets/svgimg.svg'; 
function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Rendering Images in React</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
        <div>
          <h2>JPG Image</h2>
          <img 
            src={myJpgImage} 
            alt="Sample PNG" 
            style={{ width: '200px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <h2>SVG Image</h2>
          <MySvgImage 
            style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }} 
            title="Sample SVG"
          />
        </div>

      </div>
    </div>
  );
}

export default App;