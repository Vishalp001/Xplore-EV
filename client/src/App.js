import './App.css'
import Home from './singlepage/home/Home.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
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
        </Routes>
      </Router>
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
