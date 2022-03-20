import * as React from 'react'
import { useContext } from 'react'
import './dashboard.scss'
import { Context } from '../../context/Context'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TrendingAdmin from '../trending/TrendingAdmin'
import QuickBitesAdmin from '../quickbites/QuickBitesAdmin'
import VideoAdmin from '../video/VideoAdmin'
import NewsAdmin from '../news/NewsAdmin'
import BlogAdmin from '../blog/BlogAdmin'
import FreeCourseAdmin from '../freeCourse/FreeCourseAdmin'
import ECarAdmin from '../electricCar/ECarAdmin'
import EBikeAdmin from '../electricBike/EBikeAdmin'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs({
  trendings,
  quickBites,
  video,
  news,
  blog,
  freeCourse,
  eCar,
  eBike,
}) {
  const { user, dispatch } = useContext(Context)
  const [value, setValue] = React.useState(3)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      <div className='sideBar'>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: '100vh',
          }}
        >
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label='Trending' {...a11yProps(0)} />
            <Tab label='Quick Bites' {...a11yProps(1)} />
            <Tab label='Electric Car' {...a11yProps(2)} />
            <Tab label='Electric Bike' {...a11yProps(3)} />
            <Tab label='Our Videos' {...a11yProps(4)} />
            <Tab label='Latest News' {...a11yProps(5)} />
            <Tab label='Free Courses' {...a11yProps(6)} />
            <Tab label='Blog' {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TrendingAdmin trendings={trendings} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <QuickBitesAdmin quickBites={quickBites} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ECarAdmin eCar={eCar} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <EBikeAdmin eBike={eBike} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <VideoAdmin video={video} />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <NewsAdmin news={news} />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <FreeCourseAdmin freeCourse={freeCourse} />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <BlogAdmin blog={blog} />
          </TabPanel>
        </Box>

        <button className='logOutBtn' onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}
