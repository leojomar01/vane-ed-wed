import React, {  useEffect, useState } from 'react';
import './home.scss';
import './flower-pos.scss';
import './new-flower-pos.scss';
import './intro.scss';
import './btn.scss';

function Home() {
    var [pageCounter, setPageCounter] = useState(1);
    const [btnShow,setBtnShwow] = useState(true);

   

const next = ()=>{
  setPageCounter(pageCounter+1)
  setBtnShwow(false)
  btnPress(1)

}
const back = ()=>{
  setPageCounter(pageCounter-1)
  setBtnShwow(false)
  btnPress()
}

useEffect(()=>{
        const flowers = document.querySelector('.flowers');
        setTimeout(() => {
        flowers.classList.add('page1')
        }, 100);
},[])



const btnPress = (e) =>{
        const flowers = document.querySelector('.flowers');
        flowers.classList.remove(`page${pageCounter}`)
        if(e===1){
          flowers.classList.add(`page${pageCounter+1}`)
        }else{
          flowers.classList.add(`page${pageCounter-1}`)
        }
  console.log(pageCounter)
      const id = setTimeout(() => {
        setBtnShwow(true)
        }, 3500);
    return () => clearTimeout(id);
}


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
        


       
        <div className="flowers">
          <div className="flower">
            <img src="./image/f1.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f1.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f2.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f2.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f2.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f2.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f3.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f3.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f4.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f4.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f4.png" alt="" />
          </div>
          <div className="flower">
            <img src="./image/f2.png" alt="" />
          </div>
        </div>


        {pageCounter===1&&(
           <div id="intro">
           <h1 className='text'>Eduardson</h1>
           <p className='text'>C. IGNACIO</p>
           <h3 className='text'>&</h3>
           <h1 className='text'>Vanessa Mae</h1>
           <p className='text'>R. INOCENTE</p>
           <h2 className='text'>Invite You As they say I DO</h2>
            </div>
          )}

          {pageCounter===3&&(
            <div id="pri-sponsor">
          <h1>Ignacio - Inocente</h1>
          <h3>Nuptials</h3>
          <br/>
          <h2>Principal Sponsor</h2>
          <div className="sponsor">
            <div className="godfather">
              <p>MR. EDUARDO BASILIO N. JOSON</p>
              <p>MR. BERNARD HERERRA</p>
              <p>ATTY. TOMAS F. LAHOM III</p>
              <p>MR. EFREN CARPIO</p>
              <p>MR. ROBERTO FLORES</p>
              <p>MR. AL NIETES</p>
              <p>MR. PETRONILO MANALAD</p>
              <p>MR. CHRISTOPHER DELFIN</p>
              <p>MR. BRAIH MOHD AL-MOAWI</p>
              <p>MR. JOSELITO GONZALES</p>
              <p>MR. JUNE VILLANUEVA</p>
              <p>MR. MARCELO ENRIQUEZ</p>
              <p>MR. ISMAEL TAMAYO</p>
              <p>MR. CONRAD HIZON</p>
          </div>
          <div className="godmother">
              <p>MRS. JIN MACASPAC</p>
              <p>HON. NIÑA PAULEEN N. JOSON</p>
              <p>MRS. ELIZABETH CAMPO</p>
              <p>MRS. JANE VELILIA</p>
              <p>MRS. NENITA CORPUZ</p>
              <p>MRS. EVELYN CAIRLAN</p>
              <p>MRS. CORNELIA DE MAYO</p>
              <p>MRS. MARITES BUAN</p>
              <p>MRS. ELVIE QUIJANO</p>
              <p>MRS. LEONIDA ORDOÑEZ</p>
              <p>MRS. TERESA SANTIAGO</p>
              <p>MRS. RHEA UCOL</p>
              <p>MRS. ANNALISSA PINEDA</p>
              <p>MRS. HYACINTH BAÑEZ</p>
          </div>
   
          </div>
                 <div className="bestman-maidofhonor">
         <div className="bm">
             <h2>Best Man</h2>
            <p>MR. KHIAN RAFAEL I. FRANCISCO</p>
         </div>

          <div className="moh">
                <h2>Maid of Honor</h2>
            <p>MRS. RAYANA KAMILLE B. MUYOT</p>
          </div>
          </div>
            </div>
          )}

              {pageCounter===4&&(
             <div id="secondary-sponsors">
              <h2 className='ss'>Secondary Sponsor</h2>
          

  <h2>To Light Our Path</h2>
  <div className="to-light-our-path">
    <p>MR. RALPH JACOB N. PASCUA</p>
    <p>MS. CHRISTINE KYLE I. FRANCISCO</p>
  </div>

  <h2>To Clothe Us As One</h2>
  <div className="to-clothe-us-as-one">
    <p>MR. JOSE DE SAN JOSE</p>
    <p>MS. JUNIEVER E. VALDEZ</p>
  </div>

  <h2>To Bind Us Together</h2>
  <div className="to-bind-us-together">
    <p>MR. JAM VICTOR INOCENTE</p>
    <p>MS. KATE FERNANDO</p>
  </div>

    <div className="abay">
        <div className="groomsmen">
      <h2>Groom’s Men</h2>
        <p>MR. LEEYAN C. DELOS SANTOS</p>
        <p>MR. DHAN DENVER CUNANAN</p>
        <p>MR. IVAN DALE C. LARON</p>
      </div>

      <div className="bridesmaid">
        <h2>Bride’s Maid</h2>
        <p>MS. ANDI ZSUFIA MARIE HIZON</p>
        <p>MS. FRANXENE LEI I. CORPUZ</p>
        <p>MS. LISH LAY SHAINE MAGNO</p>
      </div>
    </div>

  

        </div>
          )}

       

              {pageCounter===5&&(
            <div id="secondary-sponsor2">
          <div className="bearer">
        <div className="coin-bearer">
          <h2>Coin Bearer</h2>
          <p>ACE ROB C. IGNACIO</p>
        </div>

        <div className="bible-bearer">
        <h2>Bible Bearer</h2>
          <p>DRAKE SKYLER A. NAVA</p>
        </div>

        <div className="ring-bearer">
        <h2>Ring Bearer</h2>
          <p>FRANCIS DAVE CORPUZ</p>
        </div>

        <div className="little-bride">
        <h2>Little Bride</h2>
          <p>LILLIANA REIGN DELA MERCED</p>
        </div>
        </div>

        <h2>Bearers & Flower Girls</h2>
        <div className="bearers-and-flower-girls">
          <p>JESIAH RAHJE LEXIA SORIANO</p>
          <p>GAVINE IOFEL MATEO</p>
          <p>RYZA IGNACIO</p>
          <p>PEONY GABRIELLE CARPIO</p>
          <p>LOUVILLE HARMONY SAIGE O. IGNACIO</p>
          <p>LAURELIN GALADRIEL LAHOM</p>
          <p>AMARAH JAZLYN I. POSADAS</p>
          <p>JAIDEN CAMRON P. IGNACIO</p>
          <p>MARK ROLAN CODILANA JR.</p>
          <p>MATT CAYDENN GO</p>
        </div>
        </div>
          )}

          {pageCounter===2&&(
            <div id="info">
              <p>WITH THE PRAISE OF THANKSGIVING TO GOD WITH THE BLESSING OF OUR BELOVED PARENTS & GUARDIANS...</p>
              <div className="guardian">
                <h3>Mr. Roberto Ignacio</h3>
                <h3>Mrs. Virginia Inocente</h3>

                <h3>Mrs. Felipa Carpio</h3>
                <h3>Mrs. Liwayway Reyes</h3>
              </div>
                <div className="and">&</div>
            
              <h4>WE REQUEST THE HONOR OF YOUR PRESENCE AS WE EXCHANGE OUR VOWS ON WEDNESDAY, DECEMBER 10, 2025, 2:30 PM AT</h4>
                <p>
                    <a href="https://maps.app.goo.gl/u656ovdZvCZR3fV29">Holy Family Parish Church<span role='tooltip' className='tooltip'>click here to get location</span></a>
                </p>
              <h4>RECEPTION WILL FOLLOW AT</h4>
              <p>
                <a href="https://maps.app.goo.gl/va4yKroW51jDUKAT8">Danding N. Joson Gym<span role='tooltip' className='tooltip'>click here to get location</span></a>
              </p>

            </div>
          )}

          {pageCounter===6&&(
            <div id="details">

                <div className="side">
                  <h2>Finer Details</h2>
                  <h3>Attire Guide</h3>
                  <p>STRICTLY SEMI FORMAL/CASUAL ATTIRE</p>
                  <p>WE ENCOURAGE YOU TO DRESS ACCORDING TO OUR WEDDING COLORS</p>
                  <div className="colors">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                  </div>
                  <h3>Reminder</h3>

                  <div className="pic">
                  
                  <div>
                    <img src="./image/2.png" alt="" />
                    <p>FINISH THE EVENT</p>
                  </div>
                     <div>
                    <img src="./image/1.png" alt="" />
                    <p>BE ON TIME</p>
                  </div>
                  <div>
                    <img src="./image/3.png" alt="" />
                     <p>HAVE FUN!</p>
                  </div>
                 
                   
                  </div>
                  <div className="foot">
                     <h3>Snap & Share</h3>
                   <p>HELP US CAPTURE OUR SPECIAL DAY AND SHARE IT BY TAGGING US!</p>
                   <img src="./image/5.png" alt="" />
                  </div>

                </div>
                <div className="side"></div>

            </div>
          )}
   

          {btnShow&&(
            <div id="btns">
              {pageCounter>=2&&(
                <div className="btn-back btn" onClick={back}>
                Prev
              </div>
              )}

              {pageCounter<=5 &&(
                <div className="btn btn-next" onClick={next}>
                  Next
                </div>
              )}
             </div>
          )}
         
    </div>
  )
}

export default Home