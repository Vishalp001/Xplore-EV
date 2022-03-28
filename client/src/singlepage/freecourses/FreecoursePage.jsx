import React from 'react'
import './freecoursePage.scss'
import { Link } from 'react-router-dom'
import Topbarpage from '../topbarpage/Topbarpage'

const FreecoursePage = (props) => {
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Free Courses</h1>
            <p>
              Advanced Industry Relevant Courses
              <br />
              Top Job Leading Courses
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>
              {props.freeCourse &&
                props.freeCourse.map((c) => (
                  <div key={c._id} className='gridItem'>
                    <div className='imgDiv'>
                      <img src={c.coursePhoto} alt={c.title} />
                    </div>
                    <div className='cardContain'>
                      <h1 className='title'>{c.title}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${c.desc.substring(0, 350)}...`,
                        }}
                        className='desc'
                      ></p>
                    </div>
                    <Link to={`/freecoursesblog/${c._id}`}>
                      <button className='enrollBtnBlogs'>Enroll</button>
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

export default FreecoursePage
