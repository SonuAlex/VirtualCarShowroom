import React from 'react'
import './Trending.css'

// Import Icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

// Import Images
import car1 from '../../Assets/car1.jpg'
import car2 from '../../Assets/car2.jpg'
import car3 from '../../Assets/car3.jpg'

const Trending = () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
            Trending near you
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
              Used 2019 Audi A6 45 TFSI Premium Plus
            </h5>
            <span className="dist">
              18438 kilometers
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                ₹63.02 lakh
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              BMW X5 xDrive40i xLine
            </h5>
            <span className="dist">
              51953 kilometers
            </span>
            <span className="AWD">
              AWD 6-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                ₹95.20 lakh
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>

          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Jaguar F-Type P300 Petrol R-Dynamic Coupe
            </h5>
            <span className="dist">
              32472 kilometers
            </span>
            <span className="AWD">
              RWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                ₹1.15 crore
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default Trending