import { useContext, useState } from 'react'
import './writeEBikePost.scss'
import axios from 'axios'
import { BiAddToQueue } from 'react-icons/bi'
import { Context } from '../../../context/Context'

export default function WriteEBikePost() {
  const [eBikeName, setEBikeName] = useState('')
  const [eBikePrice, setEBikePrice] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setmodel] = useState('')
  const [color, setcolor] = useState('')
  const [topSpeed, settopSpeed] = useState('')
  const [range, setRange] = useState('')
  const [torque, setTorque] = useState('')
  const [motorPower, setmotorPower] = useState('')
  const [chargingTime, setChargingTime] = useState('')
  const [batteryType, setBatteryType] = useState('')
  const [batteryCapacity, setBatteryCapacity] = useState('')
  const [features, setfeatures] = useState('')
  const [imgOne, setImgOne] = useState(null)
  const [imgTwo, setImgTwo] = useState(null)
  const [imgThree, setImgThree] = useState(null)
  const [imgFour, setImgFour] = useState(null)
  const [imgFive, setImgFive] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTrendingPost = {
      username: user.username,
      eBikeName,
      eBikePrice,
      brand,
      model,
      color,
      topSpeed,
      range,
      torque,
      motorPower,
      chargingTime,
      batteryType,
      batteryCapacity,
      features,
    }
    const dataOne = new FormData()
    const filename = Date.now() + imgOne.name
    dataOne.append('name', filename)
    dataOne.append('fileOne', imgOne)
    newTrendingPost.imgOne = filename
    try {
      await axios.post('/upload', dataOne)
    } catch (error) {
      console.log('Cant Upload the Photo')
    }

    const dataTwo = new FormData()
    const filenameTwo = Date.now() + imgTwo.name
    dataTwo.append('name', filenameTwo)
    dataTwo.append('fileTwo', imgTwo)
    newTrendingPost.imgTwo = filenameTwo
    try {
      await axios.post('/upload', dataTwo)
    } catch (error) {
      console.log('Cant Upload the InsImage Photo')
    }

    const dataThree = new FormData()
    const filenameThree = Date.now() + imgThree.name
    dataThree.append('name', filenameThree)
    dataThree.append('fileTwo', imgThree)
    newTrendingPost.imgThree = filenameThree
    try {
      await axios.post('/upload', dataThree)
    } catch (error) {
      console.log('Cant Upload the imgThree Photo')
    }
    const dataFour = new FormData()
    const filenameFour = Date.now() + imgFour.name
    dataFour.append('name', filenameFour)
    dataFour.append('fileFour', imgFour)
    newTrendingPost.imgFour = filenameFour
    try {
      await axios.post('/upload', dataFour)
    } catch (error) {
      console.log('Cant Upload the imgFour Photo')
    }
    const dataFive = new FormData()
    const filenameFive = Date.now() + imgFive.name
    dataFive.append('name', filenameFive)
    dataFive.append('fileFive', imgFive)
    newTrendingPost.imgFive = filenameFive
    try {
      await axios.post('/upload', dataFive)
    } catch (error) {
      console.log('Cant Upload the imgFive Photo')
    }

    try {
      const res = await axios.post('/ebike', newTrendingPost)
      window.location.replace('/e_bike_admin_post/' + res.data._id)
    } catch (error) {
      console.log('Cant Upload the e-car Post')
    }
  }
  return (
    <div className='write container'>
      <form className='writeForm' onSubmit={handleSubmit}>
        <h2>Upload E Bike Images</h2>
        <div className='evImageContainer '>
          <div className='EVimgDiv'>
            {imgOne && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgOne)}
                alt=''
              />
            )}
            <label htmlFor='imgOne'>
              <BiAddToQueue />
            </label>
            <input
              id='imgOne'
              type='file'
              onChange={(e) => setImgOne(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgTwo && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgTwo)}
                alt=''
              />
            )}
            <label htmlFor='imgTwo'>
              <BiAddToQueue />
            </label>
            <input
              type='file'
              id='imgTwo'
              onChange={(e) => setImgTwo(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgThree && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgThree)}
                alt=''
              />
            )}
            <label htmlFor='imgThree'>
              <BiAddToQueue />
            </label>
            <input
              type='file'
              id='imgThree'
              onChange={(e) => setImgThree(e.target.files[0])}
            />
          </div>

          <div className='EVimgDiv'>
            {imgFour && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgFour)}
                alt=''
              />
            )}
            <label htmlFor='imgFour'>
              <BiAddToQueue />
            </label>
            <input
              id='imgFour'
              type='file'
              onChange={(e) => setImgFour(e.target.files[0])}
            />
          </div>
          <div className='EVimgDiv'>
            {imgFive && (
              <img
                className='eCarWImage'
                src={URL.createObjectURL(imgFive)}
                alt=''
              />
            )}
            <label htmlFor='imgFive'>
              <BiAddToQueue />
            </label>
            <input
              id='imgFive'
              type='file'
              onChange={(e) => setImgFive(e.target.files[0])}
            />
          </div>
        </div>

        <h2>Add E Bike Name</h2>
        <input
          className='title'
          type='text'
          placeholder='E Bike Name'
          autoFocus={true}
          onChange={(e) => setEBikeName(e.target.value)}
        />
        <input
          className='title'
          type='text'
          placeholder='E Bike Price'
          autoFocus={true}
          onChange={(e) => setEBikePrice(e.target.value)}
        />

        <h2>Upload E Bike Specification</h2>

        <div className='wECSpec'>
          <input
            type='text'
            placeholder='Brand Name'
            autoFocus={true}
            onChange={(e) => setBrand(e.target.value)}
          />

          <input
            type='text'
            placeholder='model'
            autoFocus={true}
            onChange={(e) => setmodel(e.target.value)}
          />
          <input
            type='text'
            placeholder='color'
            autoFocus={true}
            onChange={(e) => setcolor(e.target.value)}
          />
          <input
            type='text'
            placeholder='Top Speed'
            autoFocus={true}
            onChange={(e) => settopSpeed(e.target.value)}
          />
          <input
            type='text'
            placeholder='Range'
            autoFocus={true}
            onChange={(e) => setRange(e.target.value)}
          />
          <input
            type='text'
            placeholder='Torque'
            autoFocus={true}
            onChange={(e) => setTorque(e.target.value)}
          />
          <input
            type='text'
            placeholder='Motor Power'
            autoFocus={true}
            onChange={(e) => setmotorPower(e.target.value)}
          />
          <input
            type='text'
            placeholder='Charging Time'
            autoFocus={true}
            onChange={(e) => setChargingTime(e.target.value)}
          />
          <input
            type='text'
            placeholder='Battery Type'
            autoFocus={true}
            onChange={(e) => setBatteryType(e.target.value)}
          />
          <input
            type='text'
            placeholder='Battery Capacity'
            autoFocus={true}
            onChange={(e) => setBatteryCapacity(e.target.value)}
          />

          <input
            type='text'
            placeholder='features'
            autoFocus={true}
            onChange={(e) => setfeatures(e.target.value)}
          />

          <button className='publishBtn' type='submit'>
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}
