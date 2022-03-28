import React from 'react'
import './knowevpage.scss'
import Topbarpage from '../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Knowevpage = ({ blog }) => {
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Read our latest article</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>
              {blog &&
                blog.map((q) => (
                  <div className='gridItem'>
                    <Link to={`/blog/${q._id}?blog`}>
                      <div className='imgDiv'>
                        <img src={q.photo} alt={q.title} />
                      </div>
                      <div className='cardContain'>
                        <h1 className='title'>{q.title}</h1>
                        <p
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: `${q.desc.substring(0, 300)}`,
                          }}
                        ></p>
                      </div>
                      <div className='iconAndCats'>
                        <div className='cat'> {q.categories}</div>
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
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Knowevpage
