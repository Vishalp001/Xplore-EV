import React, { useRef } from 'react'
import './quickbytes.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const Quickbytes = ({ quickBites }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <>
      <div id='quickBites' className='container'>
        <div className='heading'>
          <h1>Quick Bites</h1>
          <div className='hrline'></div>
          <Link to='/quickBites'>View All </Link>
        </div>
      </div>

      {/* ------------- */}
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
        modules={[Keyboard, Navigation, Autoplay]}
        className='quickBytesSlider container'
      >
        {quickBites &&
          quickBites.slice(0, 4).map((q) => (
            <SwiperSlide key={q._id}>
              <div className='cardContainer'>
                <div className='imgDiv'>
                  <img src={q.photo} alt={q.title} />
                </div>

                <div className='details'>
                  <div className='date'>
                    {new Date(q.createdAt).toDateString()}
                  </div>
                  <h1 className='title'>
                    <a href=''>{q.title}</a>
                  </h1>
                  <div
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: `${q.desc.substring(0, 250)}`,
                    }}
                  ></div>
                </div>
                <div className='iconAndCat'>
                  <div className='cat'>
                    <Link to={`/quickBites/?cat=${q.categories}`}>
                      {q.categories}
                    </Link>
                  </div>
                  <div className='shareIcons'>
                    <p>
                      <WhatsappShareButton
                        title={q.title}
                        url='https://xplore-new.web.app'
                      >
                        <WhatsappIcon size={32} round={true} />
                      </WhatsappShareButton>
                    </p>
                    <p>
                      <LinkedinShareButton
                        title={q.title}
                        url='https://xplore-new.web.app'
                        summary={q.title}
                        source='By XplorEV'
                      >
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton>
                    </p>
                    <p>
                      <FacebookShareButton
                        quote={q.title}
                        url='https://xplore-new.web.app'
                        hashtags={[
                          'goelectric',
                          'electricvehicles',
                          'electricmobility',
                          'electriccar',
                        ]}
                      >
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                    </p>
                    <p>
                      <TwitterShareButton
                        title={q.title}
                        via='EvXplor'
                        hashtags={[
                          'goelectric',
                          'electricvehicles',
                          'electricmobility',
                          'electriccar',
                        ]}
                        url='https://xplore-new.web.app'
                      >
                        <TwitterIcon size={32} round={true} />
                      </TwitterShareButton>
                    </p>
                  </div>
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

export default Quickbytes
