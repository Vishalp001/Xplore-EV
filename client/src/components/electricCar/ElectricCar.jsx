import React, { useRef } from 'react'
import './electricCar.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const ElectricCar = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='electriccars' className='container'>
        <div className='heading'>
          <h1>Electric Cars</h1>
          <div className='hrline'></div>
          <Link to='/all_cars'>View All </Link>
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
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        modules={[Keyboard, Navigation, Autoplay]}
        className='electricCarSlider container'
      >
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
              alt=''
            />
            <div className='imgDivGradient'></div>
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>Specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imgDiv'>
            <img
              src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Mini/Cooper-SE/8669/Mini-Cooper-SE-Electric/1645696928987/front-left-side-47.jpg?tr=w-456'
              alt=''
            />
          </div>
          <div className='detailsSection'>
            <h1 className='carName'>Mini Cooper SE</h1>
            <p className='carPrice'>Rs 47.20 Lakh*</p>
            <div className='carsBtn'>
              <button className='compair'>
                <Link to='/carspecification'>Specification</Link>
              </button>

              {/* <button className='specification'>specification</button> */}
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

export default ElectricCar
