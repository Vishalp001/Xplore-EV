import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './BikeSpecificationAll.scss'
import TopBarPage from '../../topbarpage/Topbarpage'
import { Link } from 'react-router-dom'
import Subscribe from '../../../components/subscribe/Subscribe'
import Footer from '../../../components/footer/Footer'

const BikeSpecificationAll = (props) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = props.eBike
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((eC) => {
      return (
        <div className='allCarItems'>
          <div className='imgDiv'>
            <Link to={`/ev_spec/${eC._id}`}>
              <img src={eC.imgOne} alt={eC.evName} />
            </Link>
          </div>
          <div className='carInfo'>
            <div className='carName'>{eC.evName}</div>
            <div className='carPrice'>Rs {eC.evPrice}*</div>
            <div className='carBtns'>
              <Link to={`/ev_spec/${eC._id}`}>
                <button className='specificationBtn'>Specification</button>
              </Link>
              <Link to={`/compair_bikes/${eC._id}`}>
                <button className='compair'>Compair</button>
              </Link>
            </div>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(props.eBike.length / usersPerpage)

  console.log(pageCount, 'pageCount')

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <TopBarPage />
      <div className='container'>
        <div className='spHeader'>
          <h1>Electric Bikes</h1>
          <p>Latest Electric Bikes Available in India</p>
        </div>

        {/* ------------ */}
        <div className='allCarCards'>{displayUsers}</div>
        <ReactPaginate
          previousLabel={<AiOutlineArrowLeft />}
          nextLabel={<AiOutlineArrowRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDIsabled'}
          activeClassName={'paginationActive'}
        />
      </div>
      <div>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default BikeSpecificationAll
