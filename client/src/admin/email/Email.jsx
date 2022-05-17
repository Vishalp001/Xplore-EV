import React from 'react'
import { Axios } from '../../Utility'
import { CSVLink } from 'react-csv'
import './email.scss'
const Email = (props) => {
  const handleDelete = async (e) => {
    try {
      await Axios.delete(`/email/${e}`)
      window.location.reload()
    } catch (error) {
      console.log('Cant Delete The freecourse Post')
    }
  }

  let data = []
  props.email.map((e) => {
    let Emails = e.email
    data.push({ Emails })
  })
  console.log(data)

  const csvReport = {
    data: data,
    filename: 'XplorEv_Emails_Report.csv',
  }

  return (
    <div className='adminEmail'>
      <div className='exportbtn'>
        <button className='readMore'>
          <CSVLink {...csvReport}>Export to CSV</CSVLink>
        </button>
      </div>

      <table>
        <tr>
          <th>#</th>
          <th>Emails</th>
          <th>Delete</th>
        </tr>
        {props.email.map((email, i) => (
          <tr key={email._id}>
            <td>{i + 1}</td>
            <td>{email.email}</td>
            <td className='deleteBtn' onClick={(e) => handleDelete(email._id)}>
              Delete
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Email
