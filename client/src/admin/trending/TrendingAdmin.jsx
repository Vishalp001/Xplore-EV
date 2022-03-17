import React from 'react'
import { Link } from 'react-router-dom'
import './trendingAdmin.scss'
const TrendingAdmin = ({ trendings }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Trenging Post</h1>
        <Link to='/create_trending_post'>
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
            {trendings &&
              trendings.map((t) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{t.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${t.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(t.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${t.categories}`}>{t.categories}</Link>
                  </td>
                  <td>
                    <Link to={`/trending_admin_post/${t._id}`}>View/Edit</Link>
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

export default TrendingAdmin
