import React from 'react'
import ElectricBikes from '../../components/electricBikes/ElectricBikes'
import ElectricCar from '../../components/electricCar/ElectricCar'
import Evknowledge from '../../components/evKnowledge/Evknowledge'
import KnowEv from '../../components/knowEv/KnowEv'
import LetestNews from '../../components/letestNews/LetestNews'
import Quickbytes from '../../components/quickbytes/Quickbytes'
import Subscribe from '../../components/subscribe/Subscribe'
import Topbar from '../../components/topBar/Topbar'
import Trending from '../../components/trending/Trending'
import Find from '../../components/find/Find'
import OurVideos from '../../components/ourVideos/OurVideos'
import UpcomingEv from '../../components/upcomingEv/UpcomingEv'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Home = ({
  trendings,
  quickBites,
  eCar,
  eBike,
  video,
  news,
  blog,
  freeCourse,
}) => {
  return (
    <>
      <Topbar />
      <Trending trendings={trendings} />
      <UpcomingEv />
      {/* <Find /> */}
      <Quickbytes quickBites={quickBites} />
      <ElectricCar eCar={eCar} />
      <ElectricBikes eBike={eBike} />
      <OurVideos video={video} />
      <LetestNews news={news} />
      <Evknowledge freeCourse={freeCourse} />
      <KnowEv blog={blog} />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home
