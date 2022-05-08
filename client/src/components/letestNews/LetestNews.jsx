import React from 'react'
import './letestNews.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay, Keyboard } from 'swiper'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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

const LetestNews = (props) => {
  return (
    <>
      <div id='latestnews' className='container'>
        <div className='heading'>
          <h1>Latest News</h1>
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
          delay: 6000,
          disableOnInteraction: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        className='letestNews container'
      >
        {props.news &&
          props.news.map((n) => (
            <SwiperSlide key={n._id}>
              <div className='newsCardWrapper'>
                <div className='colOne'>
                  <div className='imgDiv'>
                    <img src={n.photo} alt={n.title} />
                    <div className='onImgCard'>
                      <div className='socialIcons'>
                        <p>
                          <WhatsappShareButton
                            title={n.title}
                            url={`https://xplore-new.web.app/blog/${n._id}?news`}
                          >
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                        </p>
                        <p>
                          <TwitterShareButton
                            className='twitter'
                            title={n.title}
                            via='EvXplor'
                            hashtags={[
                              'goelectric',
                              'electricvehicles',
                              'electricmobility',
                              'electriccar',
                            ]}
                            url={`https://xplore-new.web.app/blog/${n._id}?news`}
                          >
                            <TwitterIcon size={32} round={true} />
                          </TwitterShareButton>
                        </p>
                        <p>
                          <LinkedinShareButton
                            className='linkdin'
                            title={n.title}
                            url={`https://xplore-new.web.app/blog/${n._id}?news`}
                            summary={n.title}
                          >
                            <LinkedinIcon size={32} round={true} />
                          </LinkedinShareButton>
                        </p>
                        <p>
                          <FacebookShareButton
                            className='fb'
                            quote={n.title}
                            url={`https://xplore-new.web.app/blog/${n._id}?news`}
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
                      </div>
                      <div className='dateTime'>
                        <p>{new Date(n.createdAt).toDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='colTwo'>
                  <p className='cats'>
                    <Link to={`/latestnews/?cat=${n.categories}`}>
                      {n.categories}
                    </Link>
                  </p>
                  <h1 className='title'>{n.title}</h1>
                  <p
                    className='desc'
                    dangerouslySetInnerHTML={{
                      __html: `${n.desc.substring(0, 350)}...`,
                    }}
                  ></p>
                  <button className='readMore'>
                    <Link to={`/blog/${n._id}?news`}>Read More</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default LetestNews
