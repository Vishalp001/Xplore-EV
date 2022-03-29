import './App.css'
import Home from './singlepage/home/Home.jsx'
import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Loader from './components/loader/Loader'
import Quickbites from './singlepage/quickBites/Quickbitepage'
import Latestnews from './singlepage/latestnewspage/Latestnewspage'
import Knowevpage from './singlepage/knowEv/Knowevpage'
import Trendingpage from './singlepage/trandingpage/Trendingpage'
import Videos from './singlepage/videos/Videos'
import Latestnewsblog from './singlepage/latestnewspage/latestnewsblog/Latestnewsblog'
import Footer from './components/footer/Footer.jsx'
import Subscribe from './components/subscribe/Subscribe'
import ScrollToTop from './components/ScrollToTop'
import FreecoursePage from './singlepage/freecourses/FreecoursePage'
import Freecourseblog from './singlepage/freecourses/freecourse blog/Freecoureblog.jsx'
import GovEvPolicies from './singlepage/govEVpolicies/GovEvPolicies'
import Dashboard from './admin/dashboard/Dashboard.jsx'
import axios from 'axios'
import TrendingAdminPost from './admin/trending/trendingAdminPost/TrendingAdminPost'
import WriteTrendingPost from './admin/trending/writeTrendingPost/WriteTrendingPost'
import Register from './auth/register/Register'
import Login from './auth/login/Login'
import { Context } from './context/Context'
import QuickbitesAdminPost from './admin/quickbites/quickbitesAdminPost/QuickbitesAdminPost'
import WriteQuickBitesPost from './admin/quickbites/writeQuickbitesPost/WriteQuickbitesPost'
import VideoAdminPost from './admin/video/videoAdminPost/VideoAdminPost'
import WriteVideodPost from './admin/video/writeVideoPost/WriteVideoPost'
import NewsAdminPost from './admin/news/newsAdminPost/NewsAdminPost'
import WriteNewsPost from './admin/news/writeNewsPost/WriteNewsPost'
import WriteBlogPost from './admin/blog/WriteBlogPost/WriteBlogPost'
import BlogAdminPost from './admin/blog/blogAdminPost/BlogAdminPost'
import WriteFreeCoursePost from './admin/freeCourse/writefreeCoursePost/WriteFreeCoursePost'
import FreeCourseAdminPost from './admin/freeCourse/freeCourseAdminPost/FreeCourseAdminPost'
import WriteECarPost from './admin/electricCar/writeECarPost/WriteECarPost'
import ECarAdminPost from './admin/electricCar/eCarAdminPost/ECarAdminPost'

import WriteEvPolicies from './admin/evpolicies/writeEvPolicies/WriteEvPolicies'
import EvPoliciesAdminPost from './admin/evpolicies/EvPoliciesAdminPost/EvPoliciesAdminPost'

import WriteEBikePost from './admin/electricBike/writeEBikePost/WriteEBikePost'
import EBikeAdminPost from './admin/electricBike/eBikeAdminPost/EBikeAdminPost'
import CarSpecificationBlog from './singlepage/carSpecification/CarSpecificationblog.jsx'
import CarSpecificationAll from './singlepage/carSpecification/carSpecificationAll/CarSpecificationAll.jsx'
import BikeSpecificationBlog from './singlepage/bikeSpecification/BikeSpecificationblog'
import BikeSpecificationAll from './singlepage/bikeSpecification/bikeSpecificationAll/BikeSpecificationAll.jsx'
import Blog from './singlepage/blogs/blog/Blog'

function App() {
  const { user } = useContext(Context)
  const [trendings, setTrengings] = useState([])
  const [quickBites, setQuickBites] = useState([])
  const [video, setVideo] = useState([])
  const [news, setNews] = useState([])
  const [blog, setBlog] = useState([])
  const [freeCourse, setFreeCourse] = useState([])
  const [eCar, setECar] = useState([])
  const [eBike, setEBike] = useState([])
  const [policies, setPolicies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrendingPost = async () => {
      setLoading(true)
      const res = await axios.get('/trending')
      setTrengings(res.data)
    }
    const fetchQuickBitesPost = async () => {
      setLoading(true)

      const res = await axios.get('/quickbyte')
      setQuickBites(res.data)
    }
    const fetchVideoPost = async () => {
      setLoading(true)

      const res = await axios.get('/video')
      setVideo(res.data)
    }
    const fetchNewsPost = async () => {
      setLoading(true)

      const res = await axios.get('/news')
      setNews(res.data)
    }
    const fetchBlogPost = async () => {
      setLoading(true)

      const res = await axios.get('/blog')
      setBlog(res.data)
    }
    const fetchFreeCourse = async () => {
      setLoading(true)

      const res = await axios.get('/freecourse')
      setFreeCourse(res.data)
    }
    const fetchECar = async () => {
      const res = await axios.get('/ecar')
      setECar(res.data)
    }
    const fetchEBike = async () => {
      const res = await axios.get('/ebike')
      setEBike(res.data)
    }
    const fetchPolicies = async () => {
      const res = await axios.get('/evpolicies')
      setPolicies(res.data)
    }

    fetchTrendingPost()
    fetchQuickBitesPost()
    fetchVideoPost()
    fetchNewsPost()
    fetchBlogPost()
    fetchFreeCourse()
    fetchECar()
    fetchEBike()
    fetchPolicies()
    setLoading(false)
  }, [])

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path='/'
            element={
              loading ? (
                <Loader />
              ) : (
                <Home
                  trendings={trendings}
                  quickBites={quickBites}
                  eCar={eCar}
                  eBike={eBike}
                  video={video}
                  news={news}
                  blog={blog}
                  freeCourse={freeCourse}
                />
              )
            }
          />
          <Route
            exact
            path='/quickBites'
            element={
              loading ? <Loader /> : <Quickbites quickBites={quickBites} />
            }
          />
          <Route
            exact
            path='/knowevpage'
            element={<Knowevpage blog={blog} />}
          />
          <Route
            exact
            path='/latestnews'
            element={<Latestnews news={news} />}
          />
          <Route
            exact
            path='/trendingnews'
            element={<Trendingpage trendings={trendings} />}
          />
          <Route exact path='/videos' element={<Videos video={video} />} />
          <Route
            exact
            path='/freecourses'
            element={<FreecoursePage freeCourse={freeCourse} />}
          />
          <Route exact path='/latestnewsblog' element={<Latestnewsblog />} />
          <Route
            exact
            path='/freecoursesblog/:id'
            element={<Freecourseblog freeCourse={freeCourse} />}
          />
          <Route
            exact
            path='/gov_ev_policies'
            element={<GovEvPolicies policies={policies} />}
          />
          <Route exact path='/blog/:id' element={<Blog />} />
          <Route
            exact
            path='/all_cars'
            element={<CarSpecificationAll eCar={eCar} />}
          />
          <Route
            exact
            path='/e_car/:id'
            element={<CarSpecificationBlog eCar={eCar} />}
          />
          {/* --------------BIKES-------------- */}
          <Route
            exact
            path='/all_bikes'
            element={<BikeSpecificationAll eBike={eBike} />}
          />
          <Route
            exact
            path='/e_bike/:id'
            element={<BikeSpecificationBlog eBike={eBike} />}
          />
          {/* --------------SINGLE PAGES-------- */}
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          {/* -----------------------------ADMIN ROUTES------------- */}

          <Route
            exact
            path='/admin'
            element={
              user ? (
                <Dashboard
                  trendings={trendings}
                  quickBites={quickBites}
                  video={video}
                  news={news}
                  blog={blog}
                  freeCourse={freeCourse}
                  eCar={eCar}
                  eBike={eBike}
                  policies={policies}
                />
              ) : (
                <Login />
              )
            }
          />

          {/* --------Admin Trending Route------ */}
          <Route
            exact
            path='/trending_admin_post/:id'
            element={<TrendingAdminPost />}
          />
          <Route
            exact
            path='/create_trending_post'
            element={<WriteTrendingPost />}
          />
          {/* --------Admin QuickBites Route------ */}
          <Route
            exact
            path='/quick_bites_admin_post/:id'
            element={<QuickbitesAdminPost />}
          />

          <Route
            exact
            path='/create_quick_bites_post'
            element={<WriteQuickBitesPost />}
          />

          {/* --------Admin Video Route------ */}
          <Route
            exact
            path='/video_admin_post/:id'
            element={<VideoAdminPost />}
          />

          <Route
            exact
            path='/create_video_post'
            element={<WriteVideodPost />}
          />

          {/* --------Admin News Route------ */}
          <Route
            exact
            path='/news_admin_post/:id'
            element={<NewsAdminPost />}
          />

          <Route exact path='/create_news_post' element={<WriteNewsPost />} />

          {/* --------Admin Blog Route------ */}
          <Route
            exact
            path='/blog_admin_post/:id'
            element={<BlogAdminPost />}
          />

          <Route exact path='/create_blog_post' element={<WriteBlogPost />} />

          {/* --------Admin FreeCourse Route------ */}
          <Route
            exact
            path='/free_course_admin_post/:id'
            element={<FreeCourseAdminPost />}
          />

          <Route
            exact
            path='/create_free_course_post'
            element={<WriteFreeCoursePost />}
          />

          {/* --------Admin E Car Route------ */}
          <Route
            exact
            path='/e_car_admin_post/:id'
            element={<ECarAdminPost />}
          />

          <Route exact path='/create_e_car_post' element={<WriteECarPost />} />

          {/* --------Admin E Bike Route------ */}
          <Route
            exact
            path='/e_bike_admin_post/:id'
            element={<EBikeAdminPost />}
          />

          <Route
            exact
            path='/create_e_bike_post'
            element={<WriteEBikePost />}
          />

          {/* --------Admin evpolicies Route------ */}
          <Route
            exact
            path='/evpolicies_admin_post/:id'
            element={<EvPoliciesAdminPost />}
          />
          <Route
            exact
            path='/create_evpolicies_post'
            element={<WriteEvPolicies />}
          />
        </Routes>
      </Router>
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
