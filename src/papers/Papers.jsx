import React from 'react';
import { Link } from 'react-router-dom';
import './Papers.css'

export const Papers = () => 
  <div className='containerPapers'>
    <div className='papersnavbar'>
      <div className='papersnavbartextContainer'>
        <h5 className='papersnavItem'>
          <Link to='/' className='papersnavItem'>Home</Link>
          <Link to='/Lectures' className='papersnavItem'>Lectures</Link>
          <Link to='/Papers' className='papersnavItem'>Papers</Link>
          <Link to='/Projects' className='papersnavItem'>Projects</Link>
          <Link to='/Courses' className='papersnavItem'>Courses</Link>
          <Link to='/Contact' className='papersnavItem'>Contact</Link>
        </h5>
      </div>
    </div>
    <div className='topHalfPapers'>
      <div className='title'>
        <h1 className='papertitleText'>Papers</h1>
      </div>
    </div>
    <div className='bottomHalfPapers'>
      <h1 className='banner'>Dissertation</h1>
      <a href='https://www.dropbox.com/scl/fi/kzfi2alseuabf8y0ccgxg/The-View-from-the-Armchair.doc?rlkey=3b5ke52fttp1nw1rg07dcrsir&st=eef50eds&dl=0' style={{textDecoration:'none'}}>
        <div className='armchairImage'>
          <h1 className='dissTitle'>
            The View from the Armchair
            <div className='dissSubtitle'>A Defense of Traditional Philosophy</div>
          </h1>

        </div>
      </a>
      <h1 className='banner'>Thesis</h1>
      <div className='corneaImage'>
        <h1 className='corneaTitle'>Helping CORNEA Fit In</h1>
      </div>
      <h1 className='banner'>Philosophical Theology</h1>
      <div className='paperRow'>
        <div className='rowBox' style={{backgroundImage: "url('https://www.thoughtco.com/thmb/6A-nCc0vxM13Ggt2cOH7v43LhxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-960773850-85f50747071140b7bdc10eaf65fd55d8.jpg')", backgroundPosition:'center'}}>
          <a href='https://docs.google.com/document/d/1h8NP9cRBO7yVMLgACCwRJ3Dp0AowngHN/edit?usp=sharing&ouid=117024519972961587403&rtpof=true&sd=true' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>
              A Hail Mary Pass for Simple Foreknowledge?
            </h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://cdn.britannica.com/95/128795-050-4DF5857E/Detail-statue-Atlas-Paphos-Greece-globe.jpg')", backgroundPosition:'40% 45%', backgroundSize: '100%'}}>
          <a href='https://docs.google.com/document/d/180dm0XveFsu_DycxVe_KbRDhSN1yic5P/edit?usp=sharing&ouid=117024519972961587403&rtpof=true&sd=true' target='_blank' style={{textDecoration:'none'}}>
            <h1  className='textBox'>The Value of Omnipotence</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/01/33/39/30/360_F_133393041_1hQSEMY0KnAVZzMTZAWEnfn0dm5HLyUC.jpg')", backgroundPosition: '50% 60%'}}>
          <a href='https://docs.google.com/document/d/1bQIEhmk5hhPu8MU9FjEjigMxWsRic_tA/edit?usp=sharing&ouid=117024519972961587403&rtpof=true&sd=true' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Argument from Contingency</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://pemptousia.com/files/2016/12/gennisi.jpg')", backgroundPosition:'40% 60%'}}>
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Erring on the Side of Caution</h1>
          </a>
        </div>

        <div className='rowBox' style={{backgroundImage: "url('https://goodshepherdcampus.org/wp-content/uploads/2018/05/web3-holy-trinity-painting-art-religious-father-son-holy-spirit-shutterstock_236732077-renata-sedmakova-shutterstock-846x423.jpg')", backgroundPosition:'40% 60%'}}>
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Contra Brown on the Trinity</h1>
          </a>
        </div>
      </div>
      <h1 className='banner'>Augustine</h1>
      <div className='paperRow'>
        <div className='rowBox' style={{backgroundImage: "url('https://www.worldhistory.org/img/c/p/1200x900/5333.jpg')"}}>
          <a href='https://drive.google.com/file/d/1lmbDE6wGWpMo-zU3S2k_W2XujYDrfTvz/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Creation, Time, and the Creator</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://www.wheaton.edu/media/christ-at-the-core/Augustine.jpg')", backgroundPosition:'40% 45%'}}>
          <a href='https://drive.google.com/file/d/1XGEbPqPL49S0uLRan5_YLqp25_vdzwU0/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1  className='textBox'>Augustine and the Moorean Shift</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://churchlifejournal.nd.edu/assets/350852/1200x/augustine.jpg)", backgroundPosition: '40% 35%'}}>
          <a href='https://drive.google.com/file/d/1paMx5fvUA2JQrItUxEkEtbJOzbto_22O/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Original Sin is the Key</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://uscatholic.org/wp-content/uploads/2019/02/Trinity-GYA_flickr-Thomas-Hawk_0.jpg')", backgroundPosition: 'center'}}>
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Augustine, Gregory, the Trinitarian Divide</h1>
          </a>
        </div>
      </div>

      <h1 className='banner'>Anselm</h1>

      <div className='paperRow'>
        <div className='rowBox' style={{backgroundImage: "url('https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/2022042121040_4eb2a5c20b8cfe1b2168720cca820a60bf003fd471cb73ccf729028aa9c92840.jpg')", backgroundPosition: '40% 35%'}} >
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}> 
            <h1         className='textBox'>Does God Save Necessarily?</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://i.swncdn.com/media/950w/via/images/2023/03/09/29749/29749-gettyimages-1431341048_source_file.jpg')"}}>
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>Anselm on Freedom</h1>
          </a>
        </div>
      </div>
      <h1 className='banner'>Aquinas</h1>
      <div className='paperRow'>
        <div className='rowBox' style={{backgroundImage: "url('https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/04/web-saint-thomas-aquinas-public-domain.jpg')", backgroundPosition: '70% 50%'}}>
          <a href='https://drive.google.com/file/d/1r2DryiH7Hk3OaqLcT9ugMZ_ytxCgGj_C/view?usp=sharing' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>The Fourth Way</h1>
          </a>
        </div>
        <div className='rowBox' style={{backgroundImage: "url('https://www.catholicnewsagency.com/images/St_Thomas_Aquinas_Credit_Renata_Sedmakova_via_wwwshutterstockcom_CNA.jpg?jpg')", backgroundPosition: 'center'}}>
          <a href=' https://docs.google.com/document/d/1n6LQhaBiHldkIQo6Qap49l2ABrov3P2g/edit?usp=sharing&ouid=117024519972961587403&rtpof=true&sd=true' target='_blank' style={{textDecoration:'none'}}>
            <h1 className='textBox'>A Positive Conception of Simplicity</h1>
          </a>
        </div>
      </div>
    </div>
  </div>

