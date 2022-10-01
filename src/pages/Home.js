import React from 'react';
import { Link } from 'react-router-dom'
import BannerImage from '../assets/bgWorkDesk.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div 
      className="home"
      style={{backgroundImage: `url(${BannerImage})`}}
    >
      <div className="headerContainer">
        <h1>Hi! I'm Roald.</h1>
        <p>UI/UX Design and Front-End Development.</p>
        <Link to="/about">
          <button>View My Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;