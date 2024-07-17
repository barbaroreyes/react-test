import React from 'react';
import {Link} from 'react-router-dom'
import Corona from '../../home.webp';
import './home.css'


const Home = () => {

    return (
    <div className='home-container'>
        <div className='home_image_container'>
          <img src={Corona} alt='pic'/></div>
    <div className='welcome'>
     Welcome
    </div>

     <div className = "btn-container">
      <Link to='/form'
      className='btn'>
      Book Instantly
      </Link>
      </div>
       <p>Your Limo Service</p>
    </div>
  );
}

export default Home;
