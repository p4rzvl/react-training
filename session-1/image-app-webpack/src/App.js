import React from 'react';
import myPngImage from './assets/cat.jpg';
import MySvgComponent from './assets/svgimg.svg';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Rendering Images in Webpack</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
        <div>
          <h2>PNG Image</h2>
          <img 
            src={myPngImage} 
            alt="Sample PNG" 
            style={{ width: '200px', border: '1px solid #ccc' }} 
          />
        </div>

        <div>
          <h2>SVG Image</h2>
          <MySvgComponent 
            style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }} 
          />
        </div>

      </div>
    </div>
  );
}

export default App;