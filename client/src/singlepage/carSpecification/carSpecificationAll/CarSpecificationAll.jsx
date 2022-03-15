import React from 'react'
import './carSpecificationAll.scss'
import TopBarPage from '../../topbarpage/Topbarpage'
import { Link } from 'react-router-dom'
const CarSpecificationAll = () => {
  return (
    <>
      <TopBarPage />
      <div className='container'>
        <div className='spHeader'>
          <h1>Electric Cars</h1>
          <p>
            3 Min reads that are fun, insightful and easy to understand.
            <br />
            This is Finshots as you know it.
          </p>
        </div>

        {/* ------------ */}
        <div className='allCarCards'>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://cdn.pixabay.com/photo/2019/08/03/20/56/carsharing-4382651_960_720.jpg'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://cdn.pixabay.com/photo/2016/08/31/15/50/electric-car-1633932_960_720.jpg'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://cdn.pixabay.com/photo/2022/01/16/23/15/car-6943487_960_720.jpg'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
          <div className='allCarItems'>
            <div className='imgDiv'>
              <img
                src='https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt=''
              />
            </div>
            <div className='carInfo'>
              <div className='carName'>Mini Cooper SE</div>
              <div className='carPrice'>Rs 47.20 Lakh*</div>
              <div className='carBtns'>
                <button className='specificationBtn'>
                  <Link to='/carspecification'>Specification</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarSpecificationAll
