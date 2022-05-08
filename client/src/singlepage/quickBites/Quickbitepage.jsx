import React, { useState } from 'react'
import './quickbitepage.jsx.scss'
import ReactPaginate from 'react-paginate'
import Topbarpage from '../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
const Quickbites = ({ quickBites }) => {
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerpage = 3
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = quickBites
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((q) => {
      return (
        <>
          <div className='gridItem quickbiteItem'>
            <div className='imgDiv'>
              <img src={q.photo} alt={q.title} />
            </div>
            <div className='cardContain'>
              <h1 className='title'>{q.title}</h1>
              <p
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: `${q.desc.substring(0, 250)}`,
                }}
              ></p>
            </div>
            <div className='iconAndCats'>
              <div className='cat'>
                <Link to={`/?cat=${q.categories}`}>{q.categories}</Link>
              </div>
              <div className='shareIcons'>
                <p>
                  <WhatsappShareButton
                    title={q.title}
                    url='https://xplore-new.web.app'
                  >
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                </p>
                <p>
                  <LinkedinShareButton
                    title={q.title}
                    url='https://xplore-new.web.app'
                    summary={q.title}
                    source='By XplorEV'
                  >
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </p>
                <p>
                  <FacebookShareButton
                    quote={q.title}
                    url='https://xplore-new.web.app'
                    hashtags={[
                      'goelectric',
                      'electricvehicles',
                      'electricmobility',
                      'electriccar',
                    ]}
                  >
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </p>
                <p>
                  <TwitterShareButton
                    title={q.title}
                    via='EvXplor'
                    hashtags={[
                      'goelectric',
                      'electricvehicles',
                      'electricmobility',
                      'electriccar',
                    ]}
                    url='https://xplore-new.web.app'
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </p>
              </div>
            </div>
          </div>
        </>
      )
    })

  const pageCount = Math.ceil(quickBites.length / usersPerpage)

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
            <h1>Quick Bites</h1>
            <p>
              3 Min reads that are fun, insightful and easy to understand.
              <br />
              This is Finshots as you know it.
            </p>
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

export default Quickbites
