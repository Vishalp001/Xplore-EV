import React from 'react'
import './footer.scss'
import logo from '../../assets/images/logo.png'
import newLogo from '../../assets/images/carlogo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container footerContainer'>
          <div className='info'>
            <div className='imgDiv'>
              <img src={newLogo} alt='newLogo' />
            </div>
            <p>
              XplorEV is the fastest growing one-stop electric vehicle platform
              that brings the latest news, videos and quality courses to spread
              awareness and knowledge in our society.
            </p>
          </div>
          <div className='quickContact'>
            <h1>Quick Contact</h1>

            <p>
              <span></span> <a href='tel:8319979800'>831 997 9800</a>
            </p>
            <p>
              <span></span>
              <a href='mailto: xplorev3@gmail.com'>xplorev3@gmail.com</a>
            </p>
          </div>
          <div className='otherPage'>
            <h1>Overview</h1>
            <p>
              <span></span>About us
            </p>
            <p>
              <span></span>Term Of Service
            </p>
            <p>
              <span></span> Privacy Policy
            </p>
          </div>
          <div className='socialMedia'>
            <h1>Our Social Media</h1>
            <p>
              <span></span>
              <a href='https://www.instagram.com/xplor.ev/' target='_blank'>
                Instagram
              </a>
            </p>
            <p>
              <span></span>
              <a href='https://www.youtube.com/c/XplorEV' target='_blank'>
                YouTube
              </a>
            </p>
            <p>
              <span></span>
              <a href='https://m.facebook.com/xplorev1/?_rdr' target='_blank'>
                Facebook
              </a>
            </p>
            <p>
              <span></span>
              <a
                href='https://www.linkedin.com/company/xplorev/'
                target='_blank'
              >
                Linkedin
              </a>
            </p>
            <p>
              <span></span>
              <a href='https://twitter.com/EvXplor' target='_blank'>
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div className='credit'>
          {/* <p>Copyright 2022 © Caroze | Made By Vishal & Saloni with ❤️</p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
