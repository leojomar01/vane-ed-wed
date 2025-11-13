import React from 'react'
import './home.scss';
import './flower-pos.scss';
import './intro.scss';
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

        <div id="intro">
           <h1 className='text'>Eduardson</h1>
           <p className='text'>C. IGNACIO</p>
           <h3 className='text'>&</h3>
           <h1 className='text'>Vanessa Mae</h1>
           <p className='text'>R. INOCENTE</p>

           <h2 className='text'>Invite You As they say I DO</h2>
        </div>
    </div>
  )
}

export default Home