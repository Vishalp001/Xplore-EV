import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './knowevpage.scss'
import Topbarpage from '../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
const Knowevpage = ({ blog }) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = blog
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((q) => {
      return (
        <div className='gridItem'>
          <div className='imgDiv'>
            <img src={q.photo} alt={q.title} />
          </div>
          <div className='cardContain'>
            <Link to={`/blog/${q._id}?blog`}>
              <h1 className='title'>{q.title}</h1>
              <p
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: `${q.desc.substring(0, 150)}`,
                }}
              ></p>
            </Link>
          </div>
          <div className='iconAndCats'>
            <div className='cat'>
              <Link to={`?cat=${q.categories}`}>{q.categories}</Link>
            </div>
            <div className='date'>{new Date(q.createdAt).toDateString()}</div>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(blog.length / usersPerpage)

  console.log(pageCount, 'pageCount')

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Topbarpage />
      <div className='spQuickbitesWrapper'>
        <div className='container spQuickbites'>
          <div className='spHeader'>
            <h1>Read our latest article</h1>
            <p>Special Blogs on Electric Vehicle Technology</p>
          </div>

          <div className='spQBCards'>
            <div className='gridContainer'>{displayUsers}</div>
          </div>
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
      </div>
      <div>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default Knowevpage
