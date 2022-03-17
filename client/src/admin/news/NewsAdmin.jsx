import React from 'react'
import { Link } from 'react-router-dom'
import './newsAdmin.scss'
const NewsAdmin = ({ news }) => {
  console.log(news)
  return (
    <>
      <div className='CreatePost'>
        <h1>Create News Post</h1>
        <Link to='/create_news_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='trendingAdmin'>
        <table class='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Title
              </th>
              <th className='desc' scope='col'>
                Desc
              </th>
              <th className='date' scope='col'>
                Date
              </th>
              <th className='cate' scope='col'>
                Categories
              </th>
              <th className='edit' scope='col'>
                View/Edit
              </th>
              <th className='delete' scope='col'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {news &&
              news.map((n) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{n.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${n.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(n.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${n.categories}`}>{n.categories}</Link>
                  </td>
                  <td>
                    <Link to={`/news_admin_post/${n._id}`}>View/Edit</Link>
                  </td>
                  <td>Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NewsAdmin
