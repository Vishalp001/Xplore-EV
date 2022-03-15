import React, { useRef } from 'react'
import './knowEv.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'

const KnowEv = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <div id='knowev' className='container knowEvContainer'>
        <div className='knowEvheader'>
          <h2>Article that might help</h2>
          <h1>Read our latest article</h1>
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
          className='knowEvSlider'
        >
          <SwiperSlide>
            <div className='knowEvCardContainer'>
              <div className='imgDiv'>
                <img
                  src='https://tykit.rometheme.pro/caroze/wp-content/uploads/sites/43/2022/02/powerful-electric-wall-charger-for-ev-vehicles-cha-2021-08-29-14-49-14-utc.jpg'
                  alt=''
                />
              </div>
              <div className='knowEvCardContent'>
                <h1 className='title'>
                  So what maintenance does an electric car with low battery ?
                </h1>
                <p className='desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum neque turpis, imperdiet at purus eget, sagittis
                  accumsan ante. Pellentesque ultrices a odio consectetur
                  sagittis.
                </p>
              </div>
              <div className='knowEvCardFooter'>
                <div className='date'>February 14, 2022 </div>
                <div className='cats'>
                  <p>
                    <span></span> Lifefebruary
                  </p>
                </div>
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
      </div>
    </>
  )
}

export default KnowEv
