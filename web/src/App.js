import meAndHer from './meandher.jpg';
import kerwin from './kerwin.png';
import { Button } from 'react-bootstrap'
import React, { useState } from 'react';
import './App.css';
const App = () => {
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

const [cssButtonNo, setCSSButtonNo] = useState({})
const [isYes, setIsYes] = useState(false)
const onHandleYes = () => {
  setIsYes(true)
}
const onMoveNoButton = () => {
  setCSSButtonNo({
    position: "absolute",
    left: `${Math.floor(Math.random() * window.innerWidth) + 1}px`,
    bottom: `${Math.floor(Math.random() * window.innerHeight) + 1}px`,
    top: `${Math.floor(Math.random() * window.innerHeight) + 1}px`,
  })
}
  return (
    <div className="App">
      <header className="App-header">
        {
          !isYes ? 
            <>
              <p>Will you be my girlfriend, <b>Micaela Francisco</b>?</p>
              <img src={kerwin} className="Yes-logo" alt="logo" />
            </>
          : 
          <>
            <p>
              Starting today, {formattedDate}
            </p>
            <div className="image-container">
              {/* <img src="your_image_url" alt="Your Image" className="image" /> */}
              <img src={meAndHer} className='Yes-logo' alt="logo" />
              <div className="confetti"></div>
            </div>
            <p>
            <b>Kerwin</b> and <b>Micaela</b> are officially together.
            </p>
          </>
        }
        <div>
          {
            (!isYes) &&
            (    
              <> 
                <Button className="button-pink button-yes" onClick={onHandleYes}>YES</Button>
                <Button className="button-pink button-no" style={cssButtonNo} onClick={onMoveNoButton} onMouseEnter={onMoveNoButton} >NO</Button>
              </>
            )    
          }
        </div>
      </header>
    </div>
  );
}

export default App;
