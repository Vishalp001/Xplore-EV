import React from 'react'
import './quickbitepage.jsx.scss'
import Topbarpage from '../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
const Quickbites = ({ quickBites }) => {
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Quick Bites</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>
              {quickBites &&
                quickBites.map((q) => (
                  <div className='gridItem'>
                    <div className='imgDiv'>
                      <img src={q.photo} alt='' />
                    </div>
                    <div className='cardContain'>
                      <h1 className='title'>{q.title}</h1>
                      <p
                        className='desc'
                        dangerouslySetInnerHTML={{
                          __html: `${q.desc.substring(0, 250)}`,
                        }}
                      ></p>
                      <div className='shareIcons'>
                        <p>
                          <GrTwitter />
                        </p>
                        <p>
                          <FaLinkedin />
                        </p>
                        <p>
                          <GrFacebook />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quickbites
