import React, { useRef } from 'react'
import './evknowledge.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Evknowledge = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='freecourses' className='container'>
        <div className='heading'>
          <h1>Free Courses</h1>
          <div className='hrline'></div>
          <Link to='/freecourses'>View All </Link>
        </div>
      </div>

      {/* ---------------- */}

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
        className='evKnowledgeSlider container'
      >
        <SwiperSlide>
          <Link to='/freecoursesblog'>
            <div className='cardConatiner'>
              <div className='imgDiv'>
                <img
                  src='https://img-b.udemycdn.com/course/240x135/1565838_e54e_15.jpg?secure=QG6a2xqszwqw6fqwSfY57g%3D%3D%2C1647224635'
                  alt=''
                />
              </div>
              <h1 className='title'>
                Post Graduate Program in STAAD.Pro for RCC, Industrial
              </h1>
              <p className='desc'>
                People of ancient civilizations used architecture for creating
                habitats whereas buildings and constructions of present day are
                more concerned about fulfilling all the possible needs of people
              </p>
            </div>
          </Link>
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

export default Evknowledge
