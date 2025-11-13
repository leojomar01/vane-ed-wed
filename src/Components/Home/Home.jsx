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
        <div id="pri-sponsor">
          <h1>Ignacio - Inocente</h1>
          <h3>Nuptials</h3>
          <h2>Principal Sponsor</h2>
          <div className="sponsor">
            <div className="godfather">
            <p>MR. EDUARDO BASILIO N. JOSON</p>
            <p>MR. BERNARD HERERRA</p>
            <p>ATTY. TOMAS F. LAHOM III</p>
            <p>MR. EFREN CARPIO</p>
            <p>MR. AL NIETES</p>
            <p>MR. CONRAD HIZON</p>
            <p>MR. BRAIH MOHD AL-MOAWI</p>
            <p>MR. JOSELITO GONZALES</p>
            <p>MR. JUNE VILLANUEVA</p>
            <p>MR. MARCELO ENRIQUEZ</p>
            <p>MR. ISMAEL TAMAYO</p>
            <p>MR. CHRISTOPHER DELFIN</p>
          </div>
          <div className="godmother">
               <p>MRS. JIN MACASPAC</p>
              <p>HON. NIÑA PAULEEN N. JOSON</p>
              <p>MRS. ELIZABETH CAMPO</p>
              <p>MRS. JANE VELILIA</p>
              <p>MRS. NENITA CORPUZ</p>
              <p>MRS. MARITES BUAN</p>
              <p>MRS. ELVIE QUIJANO</p>
              <p>MRS. LEONIDA ORDOÑEZ</p>
              <p>MRS. TERESA SANTIAGO</p>
              <p>MRS. RHEA UCOL</p>
              <p>MRS. ANNALISSA PINEDA</p>
              <p>MRS. HYACINTH BAÑEZ</p>
              <p>MRS. CORNELIA DE MAYO</p>
              <p>MRS. EVELYN CAIRLAN</p>
          </div>
          </div>




        </div>
    </div>
  )
}

export default Home