import React from 'react'
import './home.scss';
import './flower-pos.scss';
function Home() {
  return (
    <div className='home'>

      <div className="bg"></div>
        <div className="border-frame">
          <div className="border">
          </div>
          <div className="border">
          </div>
          <div className="border">
          </div>
          <div className="border">
          </div>
        </div>




        <div className="petals"></div>
        <div className="crystal"></div>
        <div className="flowers">
          <div className="flower1"></div>
          <div className="flower1"></div>
          <div className="flower2"></div>
          <div className="flower2"></div>
          <div className="flower2"></div>
          <div className="flower2"></div>
          <div className="flower3"></div>
          <div className="flower4"></div>
        </div>
    </div>
  )
}

export default Home