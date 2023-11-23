import React from 'react'
import './Review.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

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
        </div>
    </div>
  )
}

export default Review