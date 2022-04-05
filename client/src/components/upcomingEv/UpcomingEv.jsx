import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './upcomingEv.scss'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper'
const UpcomingEv = () => {
  return (
    <>
      <div className='container upcoming'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 100,
            stretch: 0,
            depth: 50,
            modifier: 0,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default UpcomingEv
