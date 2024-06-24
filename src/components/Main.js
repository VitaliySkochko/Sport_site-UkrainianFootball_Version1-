import React from 'react';
import footballImage from '../img/foto.png'

const Main = () => {
    return (
    <main>
        <div className="image-container">
            <div className="image-with-caption">
              <img src={footballImage} alt="Картинка" />
              <div className="caption">Новини Українського Футболу</div>
            </div>
        </div>
    </main>
    );
  }
  
  export default Main; 


