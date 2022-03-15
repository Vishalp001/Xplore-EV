import React from 'react'
import './letestNews.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay, Keyboard } from 'swiper'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LetestNews = () => {
  return (
    <>
      <div id='latestnews' className='container'>
        <div className='heading'>
          <h1>Letest News</h1>
          <div className='hrline'></div>
          <Link to='/latestnews'>View All </Link>
        </div>
      </div>
      {/* ---------- */}
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        className='letestNews container'
      >
        <SwiperSlide>
          <div className='newsCardWrapper'>
            <div className='colOne'>
              <div className='imgDiv'>
                <img
                  src='https://tykit.rometheme.pro/caroze/wp-content/uploads/sites/43/2022/02/charging-battery-of-an-electric-car-in-city-2021-08-28-13-01-48-utc.jpg'
                  alt=''
                />
                <div className='onImgCard'>
                  <div className='socialIcons'>
                    <p>
                      <GrTwitter className='twitter' />
                    </p>
                    <p>
                      <FaLinkedin className='linkdin' />
                    </p>
                    <p>
                      <GrFacebook className='fb' />
                    </p>
                  </div>
                  <div className='dateTime'>
                    <p>Tuesday, January 24,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='colTwo'>
              <p className='cats'>We are the best on the town</p>
              <h1 className='title'>Traveling without demaging our planet</h1>
              <p className='desc'>
                Vivamus vel ultricies quam. Suspendisse tempus erat ac massa
                pharetra, sit amet euismod justo iaculis. Quisque ultrices
                euismod dui, sed aliquet odio eleifend at. In ac libero vel nisi
                auctor vehicula. Pellentesque facilisis sem eros, nec iaculis
                libero consectetur in Duis varius libero sit amet dolor
                eleifend.
              </p>
              <button className='readMore'>
                <Link to='/latestnewsblog'> Read More </Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='newsCardWrapper'>
            <div className='colOne'>
              <div className='imgDiv'>
                <img
                  src='https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  alt=''
                />
                <div className='onImgCard'>
                  <div className='socialIcons'>
                    <p>
                      <GrTwitter className='twitter' />
                    </p>
                    <p>
                      <FaLinkedin className='linkdin' />
                    </p>
                    <p>
                      <GrFacebook className='fb' />
                    </p>
                  </div>
                  <div className='dateTime'>
                    <p>Tuesday, January 24,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='colTwo'>
              <p className='cats'>We are the best on the town</p>
              <h1 className='title'>Traveling without demaging our planet</h1>
              <p className='desc'>
                Vivamus vel ultricies quam. Suspendisse tempus erat ac massa
                pharetra, sit amet euismod justo iaculis. Quisque ultrices
                euismod dui, sed aliquet odio eleifend at. In ac libero vel nisi
                auctor vehicula. Pellentesque facilisis sem eros, nec iaculis
                libero consectetur in Duis varius libero sit amet dolor
                eleifend.
              </p>
              <button className='readMore'>
                <Link to='/latestnewsblog'> Read More </Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='newsCardWrapper'>
            <div className='colOne'>
              <div className='imgDiv'>
                <img
                  src='https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt=''
                />
                <div className='onImgCard'>
                  <div className='socialIcons'>
                    <p>
                      <GrTwitter className='twitter' />
                    </p>
                    <p>
                      <FaLinkedin className='linkdin' />
                    </p>
                    <p>
                      <GrFacebook className='fb' />
                    </p>
                  </div>
                  <div className='dateTime'>
                    <p>Tuesday, January 24,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='colTwo'>
              <p className='cats'>We are the best on the town</p>
              <h1 className='title'>Traveling without demaging our planet</h1>
              <p className='desc'>
                Vivamus vel ultricies quam. Suspendisse tempus erat ac massa
                pharetra, sit amet euismod justo iaculis. Quisque ultrices
                euismod dui, sed aliquet odio eleifend at. In ac libero vel nisi
                auctor vehicula. Pellentesque facilisis sem eros, nec iaculis
                libero consectetur in Duis varius libero sit amet dolor
                eleifend.
              </p>
              <button className='readMore'>
                <Link to='/latestnewsblog'> Read More </Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='newsCardWrapper'>
            <div className='colOne'>
              <div className='imgDiv'>
                <img
                  src='https://images.unsplash.com/photo-1629056970742-eb810a6f2a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
                  alt=''
                />
                <div className='onImgCard'>
                  <div className='socialIcons'>
                    <p>
                      <GrTwitter className='twitter' />
                    </p>
                    <p>
                      <FaLinkedin className='linkdin' />
                    </p>
                    <p>
                      <GrFacebook className='fb' />
                    </p>
                  </div>
                  <div className='dateTime'>
                    <p>Tuesday, January 24,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='colTwo'>
              <p className='cats'>We are the best on the town</p>
              <h1 className='title'>Traveling without demaging our planet</h1>
              <p className='desc'>
                Vivamus vel ultricies quam. Suspendisse tempus erat ac massa
                pharetra, sit amet euismod justo iaculis. Quisque ultrices
                euismod dui, sed aliquet odio eleifend at. In ac libero vel nisi
                auctor vehicula. Pellentesque facilisis sem eros, nec iaculis
                libero consectetur in Duis varius libero sit amet dolor
                eleifend.
              </p>
              <button className='readMore'>
                <Link to='/latestnewsblog'> Read More </Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default LetestNews
