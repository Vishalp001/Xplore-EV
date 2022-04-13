import React from 'react'
import { Link } from 'react-router-dom'
import Topbarpage from '../topbarpage/Topbarpage'

const Trendingpage = (props) => {
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Trending News</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>
              {props.trendings &&
                props.trendings.map((t) => (
                  <div className='gridItem'>
                    <div className='imgDiv'>
                      <img src={t.photo} alt={t.title} />
                    </div>
                    <div className='cardContain'>
                      <Link to={`/blog/${t._id}?trending`}>
                        <h1 className='title'>{t.title}</h1>
                        <p
                          className='desc'
                          dangerouslySetInnerHTML={{
                            __html: `${t.desc.substring(0, 350)}...`,
                          }}
                        ></p>
                      </Link>
                      <p className='cat'>
                        <Link to={`?cat=${t.categories}`}>{t.categories}</Link>
                      </p>
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

export default Trendingpage
