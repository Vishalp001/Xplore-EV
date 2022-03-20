import React from 'react'
import { Link } from 'react-router-dom'
import './eCarAdmin.scss'
const ECarAdmin = ({ eCar }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Electric Car Post</h1>
        <Link to='/create_e_car_post'>
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
                Car Name
              </th>
              <th className='desc' scope='col'>
                Car Brand
              </th>
              <th className='date' scope='col'>
                Date
              </th>
              <th className='cate' scope='col'>
                Car Model
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
            {eCar &&
              eCar.map((c) => (
                <tr key={c._id}>
                  <th scope='row'>1</th>
                  <td>{c.eCarName}</td>
                  <td>{c.brand}</td>
                  <td>{new Date(c.createdAt).toDateString()}</td>

                  <td>{c.model}</td>
                  <td>
                    <Link to={`/e_car_admin_post/${c._id}`}>View/Edit</Link>
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
