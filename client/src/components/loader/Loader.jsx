import React from 'react'
import './loader.scss'
import loaderImg from '../../assets/images/dotLoader.svg'
import loaderCar from '../../assets/images/finalcar.gif'

const Loader = () => {
  return (
    <>
      <div className='mainLoader'>
        <img src={loaderCar} alt='Loading...' />
      </div>
    </>
  )
}

export default Loader
