import React from 'react'
import './Sellers.css'

import sellerImage1 from '../../Assets/logo(1).jpg'
import sellerImage2 from '../../Assets/logo(6).jpg'
import sellerImage3 from '../../Assets/logo(3).png'
import sellerImage4 from '../../Assets/logo(4).png'


const Sellers = () =>{
    return (
        <div className='seller section'>
         <div className="secContainer container">
            <div className="secHeading grid">
                <h3 className="secTitle">
                    Explore top sellers in town
                </h3>

                <p>Joseph Samuel Girand holds the Guinness World Record for being the greatest salesman in the world.</p>
            </div>

            <div className="sellersContainer grid">
                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage1} alt="" classname='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Toyota
                        </h4>
                        <p>from $40K</p>
                    </span>
                </div>

                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage2} alt="" classname='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Mercedes Benz
                        </h4>
                        <p>from $60K</p>
                    </span>
                </div>

                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage3} alt="" classname='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Volkswagen
                        </h4>
                        <p>from $35K</p>
                    </span>
                </div>

                <div className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage4} alt="" classname='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Hyundai
                        </h4>
                        <p>from $20K</p>
                    </span>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Sellers