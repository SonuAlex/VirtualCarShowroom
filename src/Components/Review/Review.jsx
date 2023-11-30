import React from 'react'
import './Review.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

import car1 from '../../Assets/image1.jpg'
import user1 from '../../Assets/user1.jpg'

const Review = () => {
  return (
    <div className='review section'>
        <div className="secContainer container">
          <div className="secHeading flex">
            <h3 className="secTitle">
              Recent Reviews
            </h3>

            <div className="navBtns flex">
              <BsArrowLeftShort className="icon leftIcon"/>
              <BsArrowRightShort className="icon rightIcon"/>
            </div>
          </div>

          <div className="reviewContainer grid">
            <div className="singleReview grid">
              <div className="imgDiv">
                <img src={car1} alt="Car Image" />
              </div>
              <h5 className="reviewTitle">
                2023 Cadiallac
              </h5>
              <span className="desc">
                Good cars are safe, fast,affordable to purchase,economical to operate and attractive
              </span>

              <div className="reviewerDiv flex">
                <div className="leftDiv flex">
                  <div className="reviewerImage">
                    <img src={user1} alt="Reviewer Image" />
                  </div>
                  <div className="aboutReviwer">
                    <span className="name">
                      Prakhar Srivastava
                    </span>
                    <p>Chief Editor</p>
                  </div>
                </div>
                <div className="rightDiv">
                  <AiFillStar className="icon"/>
                  <blockquote>4.84</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Review