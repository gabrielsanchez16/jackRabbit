import React, { useEffect, useState } from 'react';
import './assets/styles.css';
import header1 from './assets/img/header1.jpg';
import header2 from './assets/img/header2.jpeg';
import header3 from './assets/img/header3.webp';
import header4 from './assets/img/header4.jpg';
import header5 from './assets/img/header5.jpg';
import header6 from './assets/img/header6.jpg';

const Header = () => {

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        const nextCounter = prevCounter >= 6 ? 1 : prevCounter + 1;
        document.getElementById('radio' + nextCounter).checked = true;
        return nextCounter;
      });
    }, 10000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className='Contain-header'>
      <div className="slider">
        <div className="slides">
          {/* radio buttons start */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <input type="radio" name="radio-btn" id="radio5" />
          <input type="radio" name="radio-btn" id="radio6" />

          {/* slide images start */}
          <div className="slide first">
            <img src={header6} alt="" />
          </div>
          <div className="slide">
            <img src={header2} alt="" />
          </div>
          <div className="slide">
            <img src={header3} alt="" />
          </div>
          <div className="slide">
            <img src={header4} alt="" />
          </div>
          <div className="slide">
            <img src={header5} alt="" />
          </div>
          <div className="slide">
            <img src={header1} alt="" />
          </div>
          {/* slide images end */}
          {/* automatic navigation start */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
            <div className="auto-btn6"></div>
          </div>
          {/* automatic navigation end */}
        </div>
        {/* manual navigation start */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
          <label htmlFor="radio6" className="manual-btn"></label>
        </div>
        {/* manual navigation end */}
      </div>
      {/* image slider end */}
      <div className='effect-black'>
        <h1>Corre como los mejores</h1>
      </div>
    </div>
  );
}

export default Header;


