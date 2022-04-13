import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

import './upcomingEv.scss'

// import required modules
import { EffectCoverflow } from 'swiper'

export default function App(props) {
  const [getProps, setGetProps] = useState()

  // let header = document.getElementById('myDIV')
  // let btns = header.getElementsByClassName('btn')
  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener('onClick', function () {
  //     let current = document.getElementsByClassName('active')
  //     current[0].className = current[0].className.replace(' active', '')
  //     this.className += ' active'
  //   })
  // }

  useEffect(() => {
    setGetProps(props.upcoming)
  }, [props.upcoming])

  return (
    <>
      <div className='upcomingHeader container'>
        <h2>We have a list of all the upcoming Ev's.</h2>
        <div id='myDIV'>
          <button className='btn' onClick={(e) => setGetProps(props.upcoming)}>
            Upcoming Evs
          </button>
          <button
            className='btn'
            onClick={(e) => setGetProps(props.upcomingBike)}
          >
            Upcoming Bikes
          </button>
          <button
            className='btn active'
            onClick={(e) => setGetProps(props.upcomingCar)}
          >
            Upcoming Cars
          </button>
        </div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 10,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className='mySwiper upcoming container'
      >
        {getProps &&
          getProps.map((eC) => (
            <SwiperSlide key={eC._id}>
              <div className='imgDiv'>
                <img src={eC.imgOne} alt='imgOne' />
                <div className='imgDivGradient'></div>
              </div>
              <div className='detailsSection'>
                <h1 className='carName'>{eC.evName}</h1>
                <p className='carPrice'>Rs {eC.evPrice}*</p>
                <div className='carsBtn'>
                  <button className='compair'>
                    <Link to={`/ev_spec/${eC._id}`}>Specification</Link>
                  </button>
                  <button className='compair'>
                    <Link to={`/compair_upcoming_${eC.evtype}/${eC._id}`}>
                      Compair
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
