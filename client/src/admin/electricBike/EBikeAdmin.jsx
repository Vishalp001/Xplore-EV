import React from 'react'
import { Link } from 'react-router-dom'
import './eBikeAdmin.scss'
const ECarAdmin = ({ eBike }) => {
  console.log(eBike)
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Electric Bike Post</h1>
        <Link to='/create_e_bike_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='ECarAdmin'>
        <table className='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Bike Name
              </th>
              <th className='desc' scope='col'>
                Bike Brand
              </th>
              <th className='date' scope='col'>
                Date
              </th>
              <th className='cate' scope='col'>
                Bike Model
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
            {eBike &&
              eBike.map((b) => (
                <tr key={b._id}>
                  <th scope='row'>1</th>
                  <td>{b.eBikeName}</td>
                  <td>{b.brand}</td>
                  <td>{new Date(b.createdAt).toDateString()}</td>

                  <td>{b.model}</td>
                  <td>
                    <Link to={`/e_bike_admin_post/${b._id}`}>View/Edit</Link>
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

export default ECarAdmin
