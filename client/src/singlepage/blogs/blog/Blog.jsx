import React, { useEffect, useState } from 'react'
import './blog.scss'
import Topbarpage from '../../topbarpage/Topbarpage'
import { GrTwitter, GrFacebook } from 'react-icons/gr'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'
import ReadingBar from '../../../components/readingbar/ReadingBar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Blog = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  console.log(path)
  const [post, setPost] = useState({})

  useEffect(() => {
    const GetPost = async () => {
      const res = await axios.get(`/trending/blogs/${path}`, {
        params: location.search,
      })
      setPost(res.data)
    }
    GetPost()
  }, [path])

  return (
    <>
      <Topbarpage />
      <ReadingBar />
      <div className='lnBlog'>
        <div className='lnHead'>
          <h1 className='title'>{post.title}</h1>
          <div className='lncatAndDate'>
            <p className='lndate'>{new Date(post.createdAt).toDateString()}</p>
            <p className='lncat'>{post.categories}</p>
          </div>
        </div>
        <div className='lnImgDiv'>
          <img src={post.photo} alt={post.title} />
        </div>

        <div className='lndescAndShare'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.desc}`,
            }}
            className='lndesc'
          ></div>
          <div className='lnShare'>
            <div className='lnShareDiv'>
              <p className='lnshareText'>Share this</p>
              <div className='lnShareIcons'>
                <p>
                  <GrTwitter />
                </p>
                <p>
                  <FaLinkedinIn />
                </p>
                <p>
                  <FaFacebookF />
                </p>
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>
                  <HiMail />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
