import React, { useRef, useState } from 'react'
import './carSpecificationblog.scss'
import TopbarPage from '../topbarpage/Topbarpage'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'

const CarSpecificationBlog = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <TopbarPage />

      {/* ------ */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='carspecificationSwiper container'
      >
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/1-29-1024x592.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/4-27.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/3-29.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/2-30.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/5-26.jpg' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='carspecificationThumb container'
      >
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/1-29-1024x592.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/4-27.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/3-29.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/2-30.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://evbazaar.io/wp-content/uploads/2021/03/5-26.jpg' />
        </SwiperSlide>
      </Swiper>

      {/* -----Specifications & Key Features--------- */}

      <div className='specAndFeat container'>
        <div className='spec'>
          <h1 className='vehiclename'>Key Specifications of Maruti Swift</h1>

          <div className='specAndFeatTable'>
            {/* COL ONE */}
            <div className='tableColOne'>
              <div className='keySpec'>
                <p className='name'>ARAI Mileage</p>
                <p className='data'>23.76 kmpl</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Engine Displacement (cc)</p>
                <p className='data'>1197</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Max Power (bhp@rpm)</p>
                <p className='data'>88.50bhp@6000rpm</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Seating Capacity</p>
                <p className='data'>5</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Boot Space (Litres)</p>
                <p className='data'>268</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Body Type</p>
                <p className='data'>Hatchback</p>
              </div>
            </div>
            {/* COL TWO */}
            <div className='tableColTwo'>
              <div className='keySpec'>
                <p className='name'>ARAI Mileage</p>
                <p className='data'>23.76 kmpl</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Engine Displacement (cc)</p>
                <p className='data'>1197</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Max Power (bhp@rpm)</p>
                <p className='data'>88.50bhp@6000rpm</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Seating Capacity</p>
                <p className='data'>5</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Boot Space (Litres)</p>
                <p className='data'>268</p>
              </div>
              <div className='keySpec'>
                <p className='name'>Body Type</p>
                <p className='data'>Hatchback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarSpecificationBlog
