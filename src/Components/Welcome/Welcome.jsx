import Home from "../Home/Home";
import "./welcome.scss";
import React, { useEffect, useState } from 'react';

function Welcome() {
  const [btnShow, setBtnShow] = useState(true);
  var [pageCounter, setPageCounter] = useState(0);
  // const [loader,setLoader] = useState(true);
  // const [timeoutId, setTimeoutId] = useState(null);
    

  const rbtn = () => {
    setBtnShow(false)
    const slides = document.querySelectorAll('.slide');
    const heart = document.querySelector('.heart');
    const btns = document.querySelector('.btns');
    slides[0].classList.add('active');
    slides[1].classList.add('active');
    heart.classList.add('active');
    btns.classList.add('active');

    setPageCounter(pageCounter = pageCounter+1);
    console.log(pageCounter)
  };

  useEffect(() => {
        const slides = document.querySelectorAll('.slide');
    const heart = document.querySelector('.heart');
    const id = setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.classList.add('active');
    slides[0].classList.remove('active');
    slides[1].classList.remove('active');
    heart.classList.remove('active');
    }, 3000);
    return () => clearTimeout(id); 
  }, []);
  

  const bbtn = () =>{
    setBtnShow(true)
      const slides = document.querySelectorAll('.slide');
    const heart = document.querySelector('.heart');
    if (pageCounter>=1){
    setPageCounter(pageCounter = pageCounter-1);
    }
    console.log(pageCounter)
    slides[0].classList.remove('active');
    slides[1].classList.remove('active');
    heart.classList.remove('active');
  };

  return (
    <div className='welcome'>

      <div className="loader"></div>
      <div className="intro">
          <div className="slide active left">
          <div className="fl1"></div>
          <div className="fl2"></div>
          <div className="fl3"></div>
          <div className="fl4"></div>
        </div>
        <div className="slide active right">
          <div className="fl1"></div>
          <div className="fl2"></div>
          <div className="fl3"></div>
          <div className="fl4"></div>
          <div className="fl5"></div>
        </div>
      </div>

      {pageCounter===1 && (
        <Home/>
      )}
      {btnShow && (
        <div className="btns active" onClick={rbtn}>
          Touch to here continue
        </div>
      )}

      <div className="heart active">
        <div className="name"></div>
      </div>

      {pageCounter===1 && (
        <div className="home"><Home/></div>
      )}
      {pageCounter===2 && (
        <div className="">asdhjkasjgd</div>
      )}

      {pageCounter >= 1 && (
        <div className="back-btn " onClick={bbtn}>&larr;</div>

      )}

    </div>
  );
}

export default Welcome;
