import React from 'react'
import Heroslider from '../HeroSlider/Heroslider';
import Blogpost from '../Blogpost/Blogpost';
import "../Home/Home.css"
import Sideareabox from '../Sideareabox/Sideareabox';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div className="main-home">
        <Heroslider/>
        <div className="post-section">
        <Blogpost/>
        <Sideareabox/>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Home;