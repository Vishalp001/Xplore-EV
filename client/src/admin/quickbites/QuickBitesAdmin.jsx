import React from 'react'
import { Link } from 'react-router-dom'
import './quickBitesAdmin.scss'
const QuickBitesAdmin = ({ quickBites }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create QuickBite Post</h1>
        <Link to='/create_quick_bites_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='trendingAdmin'>
        <table className='table'>
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
            {quickBites &&
              quickBites.map((p) => (
                <tr key={p._id}>
                  <th scope='row'>1</th>
                  <td>{p.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${p.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(p.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${p.categories}`}>{p.categories}</Link>
                  </td>
                  <td>
                    <Link to={`/quick_bites_admin_post/${p._id}`}>
                      View/Edit
                    </Link>
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

export default QuickBitesAdmin
