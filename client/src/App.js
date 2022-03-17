import './App.css'
import Home from './singlepage/home/Home.jsx'
import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Quickbites from './singlepage/quickBites/Quickbitepage'
import Latestnews from './singlepage/latestnewspage/Latestnewspage'
import Trendingpage from './singlepage/trandingpage/Trendingpage.jsx'
import Videos from './singlepage/videos/Videos'
import Latestnewsblog from './singlepage/latestnewspage/latestnewsblog/Latestnewsblog'
import Footer from './components/footer/Footer.jsx'
import Subscribe from './components/subscribe/Subscribe'
import ScrollToTop from './components/ScrollToTop'
import FreecoursePage from './singlepage/freecourses/FreecoursePage'
import Freecourseblog from './singlepage/freecourses/freecourse blog/Freecoureblog.jsx'
import CarSpecificationBlog from './singlepage/carSpecification/CarSpecificationblog.jsx'
import GovEvPolicies from './singlepage/govEVpolicies/GovEvPolicies'
import CarSpecificationAll from './singlepage/carSpecification/carSpecificationAll/CarSpecificationAll.jsx'
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

function App() {
  const { user } = useContext(Context)
  const [trendings, setTrengings] = useState([])
  const [quickBites, setQuickBites] = useState([])
  const [video, setVideo] = useState([])
  const [news, setNews] = useState([])
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const fetchTrendingPost = async () => {
      const res = await axios.get('/trending')
      // console.log(res.data)
      setTrengings(res.data)
    }
    const fetchQuickBitesPost = async () => {
      const res = await axios.get('/quickbyte')
      setQuickBites(res.data)
    }
    const fetchVideoPost = async () => {
      const res = await axios.get('/video')
      setVideo(res.data)
    }
    const fetchNewsPost = async () => {
      const res = await axios.get('/news')
      setNews(res.data)
    }
    const fetchBlogPost = async () => {
      const res = await axios.get('/blog')
      setBlog(res.data)
    }
    fetchTrendingPost()
    fetchQuickBitesPost()
    fetchVideoPost()
    fetchNewsPost()
    fetchBlogPost()
  }, [])

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quickBites' element={<Quickbites />} />
          <Route exact path='/latestnews' element={<Latestnews />} />
          <Route exact path='/trendingnews' element={<Trendingpage />} />
          <Route exact path='/videos' element={<Videos />} />
          <Route exact path='/freecourses' element={<FreecoursePage />} />
          <Route exact path='/latestnewsblog' element={<Latestnewsblog />} />
          <Route exact path='/freecoursesblog' element={<Freecourseblog />} />
          <Route exact path='/gov_ev_policies' element={<GovEvPolicies />} />
          <Route exact path='/all_cars' element={<CarSpecificationAll />} />
          <Route
            exact
            path='/carspecification'
            element={<CarSpecificationBlog />}
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
        </Routes>
      </Router>
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
