import React from 'react'
import { Link } from 'react-router-dom'
import './freeCourseAdmin.scss'
const FreeCourseAdmin = ({ freeCourse }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create FreeCourse Post</h1>
        <Link to='/create_free_course_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='freeCourse'>
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
                Instructor Name
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
            {freeCourse &&
              freeCourse.map((c) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{c.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${c.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(c.createdAt).toDateString()}</td>

                  <td>{c.insName}</td>
                  <td>
                    <Link to={`/free_course_admin_post/${c._id}`}>
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

export default FreeCourseAdmin
