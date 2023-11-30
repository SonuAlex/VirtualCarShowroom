import React from 'react'
import './Auction.css'

// Import Icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import car1 from '../../Assets/BMW M2.jpg'
import car2 from '../../Assets/porche 911.jpg'

const Auction = () => {
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Active Auctions
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              New 2023 BMW M2
            </h5>
            <span className="dist">
              Nil
            </span>
            <span className="AWD">
              RWD 6-Cylinder Twin-Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹98 lakh
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              New Porche 911 Carrera S Cabriolet
            </h5>
            <span className="dist">
              Nil
            </span>
            <span className="AWD">
              RWD 6-Cylinder Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹2.18 crore
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              Used 2019 Audi A6 45 TFSI Premium Plus
            </h5>
            <span className="dist">
              18438 kilometers
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹63.02 lakh
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              Used 2019 Audi A6 45 TFSI Premium Plus
            </h5>
            <span className="dist">
              18438 kilometers
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹63.02 lakh
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              Used 2019 Audi A6 45 TFSI Premium Plus
            </h5>
            <span className="dist">
              18438 kilometers
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹63.02 lakh
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
          
            <h5 className="carTitle">
              Used 2019 Audi A6 45 TFSI Premium Plus
            </h5>
            <span className="dist">
              18438 kilometers
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_buyBtn flex">
              <span className="price">
                ₹63.02 lakh
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default Auction