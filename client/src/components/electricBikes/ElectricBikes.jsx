import React, { useRef } from 'react'
import './electricBikes.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const ElectricBikes = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='electricbikes' className='container'>
        <div className='heading'>
          <h1>Electric Bikes</h1>
          <div className='hrline'></div>
          <Link to='/all_bikes'>View All </Link>
        </div>
      </div>

      {/* -------------CARDS------ */}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='electricCarSlider container'
      >
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
            <div className='imgDivGradient'></div>
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://bd.gaadicdn.com/processedimages/honda/activa-6g/494X300/activa-6g5e53815437235.jpg?imwidth=400&impolicy=resize'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Honda Activa 6G</h1>
            <p className='carPrice'>Rs70,599 - 72,345*</p>
            <div className='carsBtn'>
              <button className='compair'>Specification</button>
              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>

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

export default ElectricBikes
