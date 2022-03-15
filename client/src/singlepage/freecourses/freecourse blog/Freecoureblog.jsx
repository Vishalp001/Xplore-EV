import React from 'react'
import './freecoureblog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

const Freecoureblog = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Topbarpage />
      <div className='courseBlogContainer'>
        <div className='courseBlogHeader'>
          <div className='nameAndBtn'>
            <h1 className='courseName'>
              Introduction to Model-Based Development
            </h1>
            <p className='enrollNo'>1,180,291 already enrolled</p>
            <button className='enrollBtn animate__flash'>
              Enroll For Free
            </button>
          </div>
          <div className='offerBy'>
            <h1 className='instructor'>Course Instructor</h1>
            <div className='imgDiv'>
              <img
                src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/khan-sir-gs-1643358982.jpg'
                alt=''
              />
            </div>
            <p className='insName'>Dr. Mangala Prasad Mishra</p>
            <p className='insPlace'>Indira Gandhi National Open University</p>
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
                <h1>About this Course</h1>
                <p>1,311,066 recent views</p>
                <p>
                  An overview of the ideas, methods, and institutions that
                  permit human society to manage risks and foster enterprise.
                  Emphasis on financially-savvy leadership skills. Description
                  of practices today and analysis of prospects for the future.
                  Introduction to risk management and behavioral finance
                  principles to understand the real-world functioning of
                  securities, insurance, and banking industries. The ultimate
                  goal of this course is using such industries effectively and
                  towards a better society.
                </p>
              </TabPanel>
              <TabPanel value='2'>
                <h1>Overview</h1>
                <h4>Give your child a coding adventure</h4>
                <p>
                  Overview that they will remember at Wiz Kid’s Coding with Vex
                  Robotics and Scratch program! Led by our talented and
                  encouraging Wiz Kid Coding instructors, your child will learn
                  key coding concepts while also learning how to code and
                  navigate virtual VEX Robots! Throughout the program, your
                  child will create and publish fun coding games and participate
                  in exciting Robotic challenges - all while learning in a
                  collaborative and social environment. Robotics Project: Learn
                  how to program VEX Robots and participate in fun Robotics
                  Challenges. Scratch Coding Projects: Students will learn how
                  to create games and animations using block-based coding.
                </p>
              </TabPanel>
              <TabPanel value='3'>
                <h5>
                  Outcomes Introduction to Coding and key programming
                  principles:
                </h5>
                <ul>
                  <li>
                    variables, if & then statements, algorithms Introduction
                  </li>
                  <li>Robotics Introduction to creating Interactive Video</li>
                  <li>activities Participate in fun Robotics challenges</li>
                  <li>
                    activities Build Problem Solving, Creativity & Critical
                    Thinking Skills
                  </li>
                  <li>Robotics Introduction to creating Interactive Video</li>
                  <li>activities Participate in fun Robotics challenges</li>
                </ul>
              </TabPanel>
              <TabPanel value='4'>Course layout</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Freecoureblog
