import React, { useRef } from 'react'
import './ourVideos.scss'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { IoLogoYoutube } from 'react-icons/io'

const OurVideos = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='videos' className='container'>
        <div className='heading'>
          <h1>Our Videos</h1>
          <div className='hrline'></div>
          <Link to='/videos'>View All </Link>
        </div>
      </div>
      {/* ------------- */}
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={5}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          210: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='ourVideosSlider container'
      >
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>

            <img
              src='https://images.unsplash.com/photo-1629820684221-d36e61748dc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>
            <img
              src='https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b3J5JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>
            <img
              src='https://images.unsplash.com/photo-1626847152272-c64724db41c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3J5JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>
            <img
              src='https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b3J5JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>
            <img
              src='https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b3J5JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <div className='ytThumble'>
              <IoLogoYoutube className='ytIocn' />
            </div>
            <img
              src='https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b3J5JTIwY2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='videoName'>
              What are the different types of Electric Vehicles? 🤔🤯
            </h1>
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

export default OurVideos
