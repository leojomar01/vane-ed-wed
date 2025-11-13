import Home from "../Home/Home";
import "./welcome.scss";
import React, { useState } from 'react';

function Welcome() {
  const [btnShow, setBtnShow] = useState(true);

  const rbtn = () => {
    const slides = document.querySelectorAll('.slide');
    const heart = document.querySelector('.heart');
    const btns = document.querySelector('.btns');
    // const home = document.querySelector('.home');

    slides[0].classList.add('active');
    slides[1].classList.add('active');
    heart.classList.add('active');
    btns.classList.add('active');
    // home.classList.add('active');
    setBtnShow(false)
    // console.log(home)
  };

  return (
    <div className='welcome'>
      <div className="slide left">
        <div className="fl1"></div>
        <div className="fl2"></div>
        <div className="fl3"></div>
        <div className="fl4"></div>
      </div>
      <div className="slide right">
        <div className="fl1"></div>
        <div className="fl2"></div>
        <div className="fl3"></div>
        <div className="fl4"></div>
        <div className="fl5"></div>
      </div>

      {btnShow && (
        <div className="btns" onClick={rbtn}>
          Click Here
        </div>
      )}

      <div className="heart">
      </div>
      {/* <div className="home active">
        <Home/>
      </div> */}

      {!btnShow && (
        <Home/>
      )}
    </div>
  );
}

export default Welcome;
