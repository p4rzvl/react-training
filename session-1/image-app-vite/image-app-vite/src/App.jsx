import catJpgImage from './assets/cat.jpg'
import MySvgImage from './assets/svgimg.svg'
import './App.css'

function App() {
    return (
        <div style={{textAlign: 'center', padding: '50px'}}>
            <h1>Rendering Images in React</h1>

            <div style={{display:'flex', justifyContent:'center', gap:'50px', marginTop:'30px'}}>
                <div>
                    <h2>JPG Image</h2>
                    <img
                    src={catJpgImage}
                    alt="sample JPG"
                    style={{width: '200px', border:'1px solid #ccc'}}
                    />
                    </div>

                    <div>
                    <h2>SVG Image</h2>
                    <img
                    src={MySvgImage}
                    alt="sample SVG"
                    style={{width: '200px', border:'1px solid #ccc'}}
                    />
                    </div>
              
            </div>
        </div>
    )
}

export default App;
