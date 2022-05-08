import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

import './upcomingEv.scss'
import { TiArrowSortedDown } from 'react-icons/ti'

// import required modules
import { EffectCoverflow, Navigation } from 'swiper'

export default function App(props) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [getProps, setGetProps] = useState()
  const [isActiveAll, setisActiveAll] = useState(true)
  const [isActiveCar, setisActiveCar] = useState(false)
  const [isActiveBike, setisActiveBike] = useState(false)

  useEffect(() => {
    setGetProps(props.upcoming)
  }, [props.upcoming])

  const allUpcoming = (type) => {
    if (type == 'all') {
      setisActiveAll(true)
      setisActiveCar(false)
      setisActiveBike(false)
    }
    if (type == 'bikes') {
      setisActiveAll(false)
      setisActiveCar(false)
      setisActiveBike(true)
    }
    if (type == 'cars') {
      setisActiveAll(false)
      setisActiveCar(true)
      setisActiveBike(false)
    }
  }

  return (
    <>
      <div className='upcomingHeader container'>
        <h2>We have a list of all the upcoming EV's.</h2>
        <div id='myDIV'>
          <button
            className={isActiveAll ? 'active' : ''}
            onClick={(e) => [setGetProps(props.upcoming), allUpcoming('all')]}
          >
            Upcoming Evs
          </button>
          <button
            className={isActiveBike ? 'active' : ''}
            onClick={(e) => [
              setGetProps(props.upcomingBike),
              allUpcoming('bikes'),
            ]}
          >
            Upcoming Bikes
          </button>
          <button
            className={isActiveCar ? 'active' : ''}
            onClick={(e) => [
              setGetProps(props.upcomingCar),
              allUpcoming('cars'),
            ]}
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
        breakpoints={{
          210: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
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
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        modules={[EffectCoverflow, Navigation]}
        className='mySwiper upcoming container'
      >
        {getProps &&
          getProps.map((eC) => (
            <SwiperSlide key={eC._id}>
              <div className='imgDiv'>
                <Link to={`/ev_spec/${eC._id}`}>
                  <img src={eC.imgOne} alt='imgOne' />
                  <div className='imgDivGradient'></div>
                </Link>
              </div>
              <div className='detailsSection'>
                <h1 className='carName'>{eC.evName}</h1>
                <p className='carPrice'>Rs {eC.evPrice}*</p>
                <div className='carsBtn'>
                  <Link to={`/ev_spec/${eC._id}`}>
                    <button className='compair'>Specification</button>
                  </Link>
                  <Link to={`/compair_upcoming_${eC.evtype}/${eC._id}`}>
                    <button className='compair'>Compair</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

        <div className='arrow'>
          <div className='' ref={prevRef}>
            <TiArrowSortedDown className='prev' /> <span>Prev</span>
          </div>
          <div className='' ref={nextRef}>
            <span>Next</span>
            <TiArrowSortedDown className='next' />
          </div>
        </div>
      </Swiper>
    </>
  )
}
