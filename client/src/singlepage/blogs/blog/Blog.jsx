import React, { useEffect, useState, useRef } from 'react'
import './blog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import Loader from '../../../components/loader/Loader'
import ReadingBar from '../../../components/readingbar/ReadingBar'
import { Axios } from '../../../Utility'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
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
import Subscribe from '../../../components/subscribe/Subscribe'
import Footer from '../../../components/footer/Footer'

const Blog = (props) => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [loader, setLoader] = useState(true)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  let { search } = useLocation()
  const url = window.location.href

  useEffect(() => {
    const GetPost = async () => {
      const res = await Axios.get(`/trending/blogs/${path}`, {
        params: location.search,
      })
      setPost(res.data)
      setLoader(false)
    }

    GetPost()
  }, [path])

  return (
    <>
      <Topbarpage />
      {loader ? (
        <Loader />
      ) : (
        <>
          <ReadingBar />
          <div className='lnBlog'>
            <div className='lnHead'>
              <h1 className='title'>{post.title}</h1>
              <div className='lncatAndDate'>
                <p className='lndate'>
                  {new Date(post.createdAt).toDateString()}
                </p>
                {/* <p className='lncat'>{post.categories}</p>   */}
              </div>
            </div>
            <div className='lnImgDiv'>
              <img src={post.photo} alt={post.title} />
            </div>

            <div className='lndescAndShare'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post.desc}`,
                }}
                className='lndesc'
              ></div>
              <div className='lnShare'>
                <div className='lnShareDiv'>
                  <p className='lnshareText'>Share this article</p>
                  <div className='lnShareIcons'>
                    <p>
                      <WhatsappShareButton title={post.title} url={url}>
                        <WhatsappIcon size={40} round={true} />
                      </WhatsappShareButton>
                    </p>
                    <p>
                      <LinkedinShareButton
                        title={post.title}
                        url={url}
                        summary={post.title}
                        source='By XplorEV'
                      >
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                    </p>
                    <p>
                      <FacebookShareButton
                        quote={post.title}
                        url={url}
                        hashtags={[
                          'goelectric',
                          'electricvehicles',
                          'electricmobility',
                          'electriccar',
                        ]}
                      >
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>
                    </p>
                    <p>
                      <TwitterShareButton
                        title={post.title}
                        via='EvXplor'
                        hashtags={[
                          'goelectric',
                          'electricvehicles',
                          'electricmobility',
                          'electriccar',
                        ]}
                        url={url}
                      >
                        <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* --------Related Articles------ */}

          {search === '?trending' && (
            <div className='container'>
              <h1>Related Trending Articles</h1>
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
                className='blogRelatedArticle '
              >
                {props.trendings &&
                  props.trendings.map((b) => (
                    <SwiperSlide key={b._id}>
                      <div className='knowEvCardContainer'>
                        <Link to={`/blog/${b._id}?trending`}>
                          <div className='imgDiv'>
                            <img src={b.photo} alt={b.title} />
                          </div>
                          <div className='knowEvCardContent'>
                            <h1 className='title'>{b.title}</h1>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${b.desc.substring(0, 150)}...`,
                              }}
                              className='desc'
                            ></p>
                          </div>
                          <div className='knowEvCardFooter'>
                            <div className='date'>
                              {new Date(b.createdAt).toDateString()}
                            </div>
                            <div className='cats'>
                              <Link to={`/trendingnews/?cat=${b.categories}`}>
                                <p>
                                  <span></span> {b.categories}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Link>
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
            </div>
          )}
          {search === '?news' && (
            <div className='container'>
              <h1>Related News Articles</h1>

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
                className='blogRelatedArticle '
              >
                {props.news &&
                  props.news.map((b) => (
                    <SwiperSlide key={b._id}>
                      <div className='knowEvCardContainer'>
                        <Link to={`/blog/${b._id}?news`}>
                          <div className='imgDiv'>
                            <img src={b.photo} alt={b.title} />
                          </div>
                          <div className='knowEvCardContent'>
                            <h1 className='title'>{b.title}</h1>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${b.desc.substring(0, 150)}...`,
                              }}
                              className='desc'
                            ></p>
                          </div>
                          <div className='knowEvCardFooter'>
                            <div className='date'>
                              {new Date(b.createdAt).toDateString()}
                            </div>
                            <div className='cats'>
                              <Link to={`/latestnews/?cat=${b.categories}`}>
                                <p>
                                  <span></span> {b.categories}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Link>
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
            </div>
          )}
          {search === '?blog' && (
            <div className='container'>
              <h1>Related Blogs Articles</h1>

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
                className='blogRelatedArticle '
              >
                {props.blog &&
                  props.blog.map((b) => (
                    <SwiperSlide key={b._id}>
                      <div className='knowEvCardContainer'>
                        <Link to={`/blog/${b._id}?blog`}>
                          <div className='imgDiv'>
                            <img src={b.photo} alt={b.title} />
                          </div>
                          <div className='knowEvCardContent'>
                            <h1 className='title'>{b.title}</h1>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${b.desc.substring(0, 150)}...`,
                              }}
                              className='desc'
                            ></p>
                          </div>
                          <div className='knowEvCardFooter'>
                            <div className='date'>
                              {new Date(b.createdAt).toDateString()}
                            </div>
                            <div className='cats'>
                              <Link to={`/knowevpage/?cat=${b.categories}`}>
                                <p>
                                  <span></span> {b.categories}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Link>
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
            </div>
          )}
        </>
      )}
      <div>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default Blog
