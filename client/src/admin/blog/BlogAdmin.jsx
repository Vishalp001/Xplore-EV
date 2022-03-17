import React from 'react'
import { Link } from 'react-router-dom'
import './blogAdmin.scss'
const BlogAdmin = ({ blog }) => {
  return (
    <>
      <div className='CreatePost'>
        <h1>Create Blog Post</h1>
        <Link to='/create_blog_post'>
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
            {blog &&
              blog.map((b) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{b.title}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${b.desc.substring(0, 150)}...`,
                    }}
                  ></td>
                  <td>{new Date(b.createdAt).toDateString()}</td>

                  <td>
                    <Link to={`/?cat=${b.categories}`}>{b.categories}</Link>
                  </td>
                  <td>
                    <Link to={`/blog_admin_post/${b._id}`}>View/Edit</Link>
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

export default BlogAdmin
