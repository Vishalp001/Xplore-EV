import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Keyboard, Navigation, Autoplay } from 'swiper'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import './freecoureblog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useLocation } from 'react-router-dom'
import { Axios } from '../../../Utility'

const Freecoureblog = (props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const [value, setValue] = React.useState('1')

  let { search } = useLocation()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const GetPost = async () => {
      const res = await Axios.get(`/freecourse/${path}`, {
        params: location.search,
      })
      setPost(res.data)
    }

    GetPost()
  }, [path])

  return (
    <>
      <Topbarpage />
      <div className='courseBlogContainer'>
        <div className='courseBlogHeader'>
          <div className='nameAndBtn'>
            <h1 className='courseName'>{post.title}</h1>
            <p className='enrollNo'>{post.enrollNo} already enrolled</p>
            <a href={post.courseLink} target='_blank'>
              <button className='enrollBtn'>Enroll For Free</button>
            </a>
          </div>
          <div className='offerBy'>
            <h1 className='instructor'>Course Instructor</h1>
            <div className='imgDiv'>
              <img src={post.insImage} alt='imgDiv' />
            </div>
            <p className='insName'>{post.insName}</p>
            <p className='insPlace'>{post.insDesc}</p>
          </div>
        </div>
        <div className='courseBlogTab'>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'rgb(76, 182, 40)' }}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  <Tab label='About' value='1' />
                  <Tab label='Instructors' value='2' />
                  <Tab label='Syllabus' value='3' />
                  <Tab label='Course layout' value='4' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.about}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='2'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.instructions}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='3'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.sylabus}`,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value='4'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.courseLayout}`,
                  }}
                ></div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
      <hr />
      <div className='container'>
        <h2>Related Courses</h2>

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
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[Keyboard, Navigation, Autoplay]}
          className='evKnowledgeSlider container'
        >
          {props.freeCourse &&
            props.freeCourse.map((fC) => (
              <SwiperSlide key={fC._id}>
                <Link to={`/freecoursesblog/${fC._id}`}>
                  <div className='cardConatiner'>
                    <div className='imgDiv'>
                      <img src={fC.coursePhoto} alt='coursePhoto' />
                    </div>
                    <h1 className='title'>
                      <a href=''> {fC.title}</a>
                    </h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${fC.desc.substring(0, 200)}...`,
                      }}
                      className='desc'
                    ></p>
                  </div>
                </Link>
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
    </>
  )
}

export default Freecoureblog
