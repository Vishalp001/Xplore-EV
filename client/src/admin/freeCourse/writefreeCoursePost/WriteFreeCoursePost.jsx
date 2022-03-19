import React, { useContext, useState } from 'react'
import './writeFreeCoursePost.scss'
// import Topbarpage from '../../topbarpage/Topbarpage'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { Context } from '../../../context/Context'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['list', 'image', 'video'],
    ['clean']['code-block'],
  ],
}
const formats = [
  'header',
  'size',
  'font',
  'strike',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block',
]

export default function WriteTrendingPost() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [enrollNo, setEnrollNo] = useState('')
  const [courseLink, setCourseLink] = useState('')
  const [insName, setInsName] = useState('')
  const [insDesc, setInsDesc] = useState('')
  const [about, setAbout] = useState('')
  const [sylabus, setSylabus] = useState('')
  const [courseLayout, setCourseLayout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [insImage, setInsImage] = useState(null)
  const [coursePhoto, setCoursePhoto] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTrendingPost = {
      username: user.username,
      title,
      desc,
      enrollNo,
      insDesc,
      insName,
      courseLink,
      about,
      sylabus,
      courseLayout,
      instructions,
    }
    const dataOne = new FormData()
    const filename = Date.now() + insImage.name
    dataOne.append('name', filename)
    dataOne.append('fileOne', insImage)
    newTrendingPost.insImage = filename
    try {
      await axios.post('/upload', dataOne)
    } catch (error) {
      console.log('Cant Upload the Photo')
    }

    const dataTwo = new FormData()
    const filenameTwo = Date.now() + coursePhoto.name
    dataTwo.append('name', filenameTwo)
    dataTwo.append('fileTwo', coursePhoto)
    newTrendingPost.coursePhoto = filenameTwo
    try {
      await axios.post('/upload', dataTwo)
    } catch (error) {
      console.log('Cant Upload the InsImage Photo')
    }
    try {
      const res = await axios.post('/freecourse', newTrendingPost)
      window.location.replace('/free_course_admin_post/' + res.data._id)
    } catch (error) {
      console.log('Cant Upload the Trending Post')
    }
  }

  return (
    <div className='writeCourseBlog'>
      <form onSubmit={handleSubmit}>
        <div className='courseBlogContainer'>
          <div className='courseBlogHeader'>
            <div className='nameAndBtn'>
              <h1 className='courseName'>
                <input
                  type='text'
                  placeholder='Course Title'
                  className=''
                  autoFocus={true}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </h1>
              <p className='enrollNo'>
                <input
                  type='text'
                  placeholder='Enroll No'
                  className=''
                  autoFocus={true}
                  onChange={(e) => setEnrollNo(e.target.value)}
                />
                already enrolled
              </p>
              <input
                type='text'
                placeholder='Link of Course'
                autoFocus={true}
                className='enrollBtn'
                onChange={(e) => setCourseLink(e.target.value)}
              ></input>
            </div>
            <div className='offerBy'>
              <h1 className='instructor'>Course Instructor</h1>
              <div>
                <input
                  type='file'
                  onChange={(e) => setInsImage(e.target.files[0])}
                />
              </div>
              <div className='imgDiv'>
                {insImage && (
                  <img
                    className=''
                    src={URL.createObjectURL(insImage)}
                    alt=''
                  />
                )}
              </div>
              <p className='insName'>
                <input
                  type='text'
                  placeholder='Instructor Name'
                  onChange={(e) => setInsName(e.target.value)}
                />
              </p>
              <p className='insPlace'>
                <input
                  type='text'
                  placeholder='Instructor Bio'
                  onChange={(e) => setInsDesc(e.target.value)}
                />
              </p>
            </div>
          </div>
          <div className='container courseImage'>
            <h4>Choose Course Image</h4>
            <input
              type='file'
              onChange={(e) => setCoursePhoto(e.target.files[0])}
            />
            {coursePhoto && (
              <img className='' src={URL.createObjectURL(coursePhoto)} alt='' />
            )}
          </div>
          <div className='container courseBio'>
            <h3>Course Bio</h3>
            <textarea
              type='text'
              placeholder='Course Bio'
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className='courseBlogTab'>
            <div className='container'>
              <div className='FreeCourseQuillEditor'>
                <h3>About</h3>
                <ReactQuill
                  placeholder='Tell your story...'
                  formats={formats}
                  modules={modules}
                  className='aboutInputs'
                  onChange={(e) => setAbout(e)}
                ></ReactQuill>
              </div>
              <div className='FreeCourseQuillEditor'>
                <h3>Sylabus</h3>
                <ReactQuill
                  placeholder='Tell your story...'
                  formats={formats}
                  modules={modules}
                  className='aboutInputs'
                  onChange={(e) => setSylabus(e)}
                ></ReactQuill>
              </div>
              <div className='FreeCourseQuillEditor'>
                <h3>Course Layout</h3>
                <ReactQuill
                  placeholder='Tell your story...'
                  formats={formats}
                  modules={modules}
                  className='aboutInputs'
                  onChange={(e) => setCourseLayout(e)}
                ></ReactQuill>
              </div>
              <div className='FreeCourseQuillEditor'>
                <h3>Instructions </h3>
                <ReactQuill
                  placeholder='Tell your story...'
                  formats={formats}
                  modules={modules}
                  className='aboutInputs'
                  onChange={(e) => setInstructions(e)}
                ></ReactQuill>
              </div>
            </div>
          </div>
        </div>
        <div className='publishBtnDiv'>
          <button className='publishBtn' type='submit'>
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}
