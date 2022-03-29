import React from 'react'
import { Link } from 'react-router-dom'
import './evpoliciesAdmin.scss'
const Evpolicies = ({ policies }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create EV Policies Post</h1>
        <Link to='/create_evpolicies_post'>
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
            {policies &&
              policies.map((t) => (
                <tr key={t._id}>
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
                    <Link to={`/evpolicies_admin_post/${t._id}`}>
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

export default Evpolicies
