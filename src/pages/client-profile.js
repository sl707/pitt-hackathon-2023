import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from 'styled-components'
import {navigate} from 'gatsby'

const BaseContainer = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  row-gap: 5px;
  padding: 20px;
`
const Title = s.p`
  margin: 0 auto;
  padding: 0;
  font-size: 35px;
`

const ProfilePage = (props) => {
  const userId = props.location.state.userId
  const [name, setName] = useState(null)
  const [DOB, setDOB] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [zip, setZip] = useState(null)
  const [ECN, setECN] = useState(null)
  const [EC, setEC] = useState(null)
  const [AIHA, setAIHA] = useState(null)
  const [DD, setDD] = useState(null)
  const [AIDD, setAIDD] = useState(null)
  const [sex, setSex] = useState(null)
  const [phone, setPhone] = useState(null)
  const [pfpUrl, setPflUrl] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:3000/server/acc', { params: {userId: props.location.state.userId }})
    .then((response) => {
      const data = response['data']
      setName(data['name'])
      setDOB(data['DOB'])
      setAddress(data['address'])
      setCity(data['city'])
      setState(data['state'])
      setZip(data['zipcode'])
      setECN(data['ecn'])
      setEC(data['eci'])
      setAIHA(data['aiad'])
      setDD(data['dd'])
      setAIDD(data['aidd'])
      setSex(data['sex'])
      setPhone(data['phone'])
      setPflUrl(data['pfpUrl'])
    })
  }, [])
  return (
    <BaseContainer>
      <div style={{objectFit: 'fill'}}>
        <img src="/REDILogo.png" width="250"onClick={() => navigate('/')}/>

      </div>
      <Title>{name}</Title>
      <div style={{display: 'flex', columnGap: '100px', alignItems: 'center', justifyContent: 'space-around'}}>
        <div style={{width: '450px', height: '350px', objectFit: 'contain', alignItems: 'center', justifyContent: 'center'}}>
          <img src={pfpUrl} alt={pfpUrl} width="450px" height="350px" objectFit="cover"/>
        </div>
        <div style={{display: 'flex', flexDirection: "column", width: '450px'}}>
          <div class="form-group">
            <label for="mi20">Date of Birth</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi20"
              value={sex}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="mi21">Phone Number</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi21"
              value={phone}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="mi22">Address</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi22"
              value={`${address}, ${city}, ${state} ${zip}`}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="mi23">Emergency Contact Name</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi23"
              value={ECN}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="mi24">Energency Contact Information</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi24"
              value={EC}
              disabled
            />
          </div>
          <div class="form-group">
            <label for="mi25">Diseases/Conditions</label>
            <input
              type="text"
              class="form-control main-border"
              id="mi25"
              value={DD}
              disabled
            />
          </div>
        </div>
      </div>
      <div class="form-group" style={{width: '50%'}}>
          <label for="mi32">Additional Information (Diseases/Disorders)</label>
          <textarea
            type="text"
            class="form-control main-border"
            id="mi32"
            value={AIDD}
            disabled
          />
        </div>
        <div class="form-group" style={{width: '50%'}}>
          <label for="mi33">Additional Information (Address)</label>
          <textarea
            type="text"
            class="form-control main-border"
            id="mi33"
            value={AIHA}
            disabled
          />
        </div>
     <button type="button" style={{marginTop: '20px'}} class="btn btn-primary" onClick={() => navigate('/modify-information', {state: {userId: props.location.state.userId}})}>
        Modify Personal Information
      </button>
    </BaseContainer>
  )
}

export default ProfilePage
