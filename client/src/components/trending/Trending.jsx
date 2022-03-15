import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './trending.scss'
// import required modules
import { Pagination } from 'swiper'

const Trending = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><div><h6>We serve what you need</h6> <h1> Lets change to friendly energy</h1>  </div>  </span>'
      )
    },
  }

  return (
    <>
      <div></div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className='trendingSwiper'
      >
        <SwiperSlide>
          <div
            className='sliderDiv'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1560253787-9c3babc1fab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
              height: '90vh',
            }}
          >
            <div className='blogContainer'>
              <div className='blogDetails'>
                <h6 className='cats'>We serve what you need</h6>
                <h1 className='title'>Let's change to friendly energy</h1>
                <p className='desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
                <button className='readMore'>Read More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='sliderDiv'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
              height: '90vh',
            }}
          >
            <div className='blogContainer'>
              <div className='blogDetails'>
                <h6 className='cats'>We serve what you need</h6>
                <h1 className='title'>Let's change to friendly energy</h1>
                <p className='desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
                <button className='readMore'>Read More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='sliderDiv'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1555472492-816b516932ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
              height: '90vh',
            }}
          >
            <div className='blogContainer'>
              <div className='blogDetails'>
                <h6 className='cats'>We serve what you need</h6>
                <h1 className='title'>Let's change to friendly energy</h1>
                <p className='desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
                <button className='readMore'>Read More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Trending
