import React, { useEffect, useState } from 'react'
import './chargingStations.scss'
import TopbarPage from '../topbarpage/Topbarpage'
import { Axios } from '../../Utility'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Rating } from '@mui/material'
import { RiChargingPileFill } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

const ChargingStations = () => {
  const [station, setStation] = useState([])
  const [citys, setCitys] = useState([])
  const [location, setLocation] = useState([])
  const [locationText, setLocationText] = useState(false)

  useEffect(() => {
    const fetchStations = async () => {
      const res = await Axios.get('/charging')
      let temp = []
      if (res.data.length > 0) {
        res.data.map((data) => temp.push(data.state))
      }
      setStation(temp)
    }
    fetchStations()
  }, [])

  const getCity = async (citys) => {
    const res = await Axios.get('/charging/citys', { params: citys })
    setCitys(res.data[0].citys)
  }

  const getLocation = (loc) => {
    setLocation(loc.location)
    setLocationText(true)
  }

  return (
    <>
      <TopbarPage />
      <div className='chargingStations'>
        <div className='chargingStationsHEader'>
          <h1>Find Charging Stations All over India </h1>
        </div>
        <div className='container'>
          <div className='inputBoxs'>
            <Autocomplete
              className='autocomplete'
              disablePortal
              options={station}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='State' />}
              onChange={(e, value) => getCity(value)}
            />

            <Autocomplete
              className='autocomplete'
              disablePortal
              options={citys}
              getOptionLabel={(option) => option.cityName}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='Cities' />}
              onChange={(e, value) => getLocation(value)}
            />
          </div>
          {locationText ? (
            <h2>We found {location.length} Charging Stations in your city</h2>
          ) : (
            <h2>Find Charging Stations in your city</h2>
          )}
          <div className=' cSCards'>
            {location.map((s) => (
              <div className='cSCard'>
                <div style={{ padding: '12px' }}>
                  <div className='name'>
                    <span>
                      <RiChargingPileFill className='boltIcon' />
                    </span>
                    <p>{s.name}</p>
                  </div>
                  <p className='adderss'>{s.adderss}</p>
                </div>
                <div className='rAndD'>
                  <Rating
                    className='ratings'
                    defaultValue={s.ratings}
                    precision={0.5}
                    readOnly
                  />
                  <p class='card__apply'>
                    <a class='card__link' href={s.direction} target='_blank'>
                      Get Direction <BsArrowRightShort />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default ChargingStations
