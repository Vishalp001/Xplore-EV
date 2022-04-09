import React, { useState } from 'react'
import './carSpecificationAll.scss'
import TopBarPage from '../../topbarpage/Topbarpage'
import { Link } from 'react-router-dom'
const CarSpecificationAll = (props) => {
  console.log(props.eCar)
  return (
    <>
      <TopBarPage />
      <div className='container'>
        <div className='spHeader'>
          <h1>Electric Cars</h1>
          <p>
            3 Min reads that are fun, insightful and easy to understand.
            <br />
            This is Finshots as you know it.
          </p>
        </div>

        {/* ------------ */}
        <div className='allCarCards'>
          {props.eCar.map((eC) => (
            <div key={eC._id} className='allCarItems'>
              <div className='imgDiv'>
                <img src={eC.imgOne} alt={eC.eCarName} />
              </div>
              <div className='carInfo'>
                <div className='carName'>{eC.evName}</div>
                <div className='carPrice'>Rs {eC.evPrice}*</div>
                <div className='carBtns'>
                  <button className='specificationBtn'>
                    <Link to={`/ev_spec/${eC._id}`}>Specification</Link>
                  </button>
                  <button className='compair'>
                    <Link to={`/compair_cars/${eC._id}`}>Compair</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CarSpecificationAll
