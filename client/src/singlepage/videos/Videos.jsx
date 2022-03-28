import React from 'react'
import Topbarpage from '../topbarpage/Topbarpage'
import './videos.scss'
import { IoLogoYoutube } from 'react-icons/io'

const Videos = (props) => {
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Videos</h1>
            <p>
              3 Min Videos, insightful and easy to understand.
              <br />
              This is Xplore Ev as you know it.
            </p>
          </div>

          <div className='videoPageCards'>
            {props.video &&
              props.video.map((v) => (
                <div className='vpcItem'>
                  <a href={v.url} target='_blank'>
                    <div className='imgDiv'>
                      <div className='ytThumble'>
                        <IoLogoYoutube className='ytIocn' />
                      </div>
                      <img src={v.photo} alt={v.title} />
                    </div>
                    <h1 className='videoTitle'>{v.title}</h1>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Videos
