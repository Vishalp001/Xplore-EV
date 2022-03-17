import React from 'react'
import { Link } from 'react-router-dom'
import './videoAdmin.scss'
const VideoAdmin = ({ video }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Video Post</h1>
        <Link to='/create_video_post'>
          <button className='readMore'>Create Post</button>
        </Link>
      </div>
      <div className='VideoAdmin'>
        <table class='table'>
          <thead>
            <tr>
              <th className='srNo' scope='col'>
                #
              </th>
              <th className='title' scope='col'>
                Title
              </th>

              <th className='date' scope='col'>
                Date
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
            {video &&
              video.map((v) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{v.title}</td>

                  <td className='date'>
                    {new Date(v.createdAt).toDateString()}
                  </td>

                  <td className='edit'>
                    <Link to={`/video_admin_post/${v._id}`}>View/Edit</Link>
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

export default VideoAdmin
