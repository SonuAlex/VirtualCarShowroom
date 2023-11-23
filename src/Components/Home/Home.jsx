import React from 'react'
import './Home.css'

//Importing Images
import homeImage from '../../Assets/homeImage.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className="secContainer">
          <div className="homeText">
            <span className="homeSpan">
              Meet your new car
            </span>
            <h1 className="homeTitle">
               Mercedes-Benz 300 SLR Coupé
            </h1>
            <div className="btns flex">
              <button className="btn">More Details</button>
              <button className="btn primaryBtn">Test Drive</button>
            </div>
          </div>

          <div className="homeImage">
            <img src={homeImage} alt="homeImage" />
          </div>
        </div>
    </div>
  )
}

export default Home