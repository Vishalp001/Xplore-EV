import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../topbarpage/Topbarpage'
import './latestnewspage.scss'
const Latestnews = () => {
  return (
    <>
      <Topbar />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Latest News</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
            </p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>
              <Link to='/latestnewsblog'>
                <div className='gridItem'>
                  <div className='imgDiv'>
                    <img
                      src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                      alt=''
                    />
                  </div>
                  <div className='cardContain'>
                    <h1 className='title'>
                      How big is YouTube’s impact on India’s GDP?
                    </h1>
                    <p className='desc'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum recusandae eligendi nemo iure accusamus iste.
                    </p>
                  </div>
                </div>
              </Link>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
              <div className='gridItem'>
                <div className='imgDiv'>
                  <img
                    src='https://cdn.finshots.app/images/2022/03/cov19-2.png'
                    alt=''
                  />
                </div>
                <div className='cardContain'>
                  <h1 className='title'>
                    How big is YouTube’s impact on India’s GDP?
                  </h1>
                  <p className='desc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum recusandae eligendi nemo iure accusamus iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Latestnews
