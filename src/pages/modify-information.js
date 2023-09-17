import React, { useState, useEffect, useMemo } from 'react'
import s from "styled-components"
import { Link, graphql, navigate } from 'gatsby'
import axios from 'axios'

const BaseContainer = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  row-gap: 10px;
  padding: 20px;
`
const ComponentContainer = s.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 50%;
`

const Title = s.p`
  margin: 0 auto;
  padding: 0;
  font-size: 35px;
`

const ModifyInfoPage = (props) => {
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
  const [trigger, setTrigger] = useState(false)
  const [sex, setSex] = useState(null)
  const [phone, setPhone] = useState(null)
  const [pfpUrl, setPfpUrl] = useState(null)
  const [pfp, setPfp] = useState(null)
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
      setPfpUrl(data['pfpUrl'])
    })
  }, [trigger])
  useEffect(() => {
    axios.post('http://localhost:3000/server/mi', {
        userId: props.location.state.userId,
        pfp: pfp
      })
  }, [pfp])
  const handleSubmit = () => {
    setTrigger(!trigger)
    axios.post('http://localhost:3000/server/mi', {
        userId: props.location.state.userId,
        DOB: DOB,
        address: address,
        aiad: AIHA,
        aidd: AIDD,
        city: city,
        dd: DD,
        eci: EC,
        ecn: ECN,
        name: name,
        state: state,
        zipcode: zip,    
        sex: sex,    
        phone: phone,
        pfpUrl: pfpUrl
    })
    .then((response) => console.log(response))
    .then(navigate("/client-profile", {
      state: {userId: props.location.state.userId}
    }))
    .catch(e => console.log(e))
  }
  // const handleUploadPfp = () => {
  //   setTrigger(!trigger)
  //   let reader = new FileReader()
  //   const imagefile = document.getElementById('mi99').files[0];
  //   const asdf = imagefile.arrayBuffer()
  //   const fdsa = asdf.then(ab => axios.post('http://localhost:3000/server/pfp', {
  //         userId: props.location.state.userId,
  //         pfp: ab})
  //   // axios.post('http://localhost:3000/server/pfp', {
  //   //   userId: props.location.state.userId,
  //   //   pfp: imagefile
  //   // })
  // }
  return (
    <BaseContainer>
          <img src="/REDILogo.png" width="250" onClick={() => navigate('/')}/>

      <Title>Change Information</Title>
      <ComponentContainer>
        <div class="form-group">
          <label for="mi1">Full Legal Name</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi1"
            placeholder="e.g. John Doe"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div class="form-group">
          <label for="mi2">Date of Birth</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi2"
            placeholder="e.g. 01-01-1950"
            onChange={e => setDOB(e.target.value)}
            value={DOB}
          />
        </div>
        <div class="form-group">
          <label for="mi20">Sex</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi20"
            placeholder="e.g. Female"
            onChange={e => setSex(e.target.value)}
            value={sex}
          />
        </div>
        <div class="form-group">
          <label for="mi4">Street Address</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi4"
            placeholder="e.g. 3700 O'Hara Street"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div class="form-group">
          <label for="mi5">City</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi5"
            placeholder="e.g. Pittsburgh"
            onChange={e => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div class="form-group">
          <label for="mi6">State</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi6"
            placeholder="e.g. PA"
            onChange={e => setState(e.target.value)}
            value={state}
          />
        </div>
        <div class="form-group">
          <label for="mi7">Zip Code</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi7"
            placeholder="e.g. 15213"
            onChange={e => setZip(e.target.value)}
            value={zip}
          />
        </div>
        <div class="form-group">
          <label for="mi12">Additional Information (Address/Home Access)</label>
          <textarea
            type="text"
            class="form-control main-border"
            id="mi12"
            placeholder="e.g. My back door has a hidden key under the flower pot"
            onChange={e => setAIHA(e.target.value)}
            value={AIHA}
          />
        </div>
        <div class="form-group">
          <label for="mi25">Phone Number</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi25"
            placeholder="e.g. 222-222-2221"
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div class="form-group">
          <label for="mi8">Emergency Contact Name</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi8"
            placeholder="e.g. Thomas Kang"
            onChange={e => setECN(e.target.value)}
            value={ECN}
          />
        </div>
        <div class="form-group">
          <label for="mi9">Emergency Contact Information</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi9"
            placeholder="e.g. 222-222-2222"
            onChange={e => setEC(e.target.value)}
            value={EC}
          />
        </div>
        <div class="form-group">
          <label for="mi10">Diseases/Disorders</label>
          <input
            type="text"
            class="form-control main-border"
            id="mi10"
            placeholder="e.g. Diabetes, Dementia"
            onChange={e => setDD(e.target.value)}
            value={DD}
          />
        </div>
        <div class="form-group">
          <label for="mi13">Additional Information (Diseases/Disorders)</label>
          <textarea
            type="text"
            class="form-control main-border"
            id="mi13"
            placeholder="e.g. I have very weak bones please treat me lightly rofl"
            onChange={e => setAIDD(e.target.value)}
            value={AIDD}
          />
        </div>
        <div class="form-group">
          <label for="mi94">Profile Picture Url</label>
          <textarea
            type="text"
            class="form-control main-border"
            id="mi94"
            placeholder="e.g. https://img.huffingtonpost.com/asset/5bb6678b250000360039a150.jpeg?ops=scalefit_720_noupscale"
            onChange={e => setPfpUrl(e.target.value)}
            value={pfpUrl}
          />
        </div>
        {/* <div class="form-group">
          <label for="mi94">Profile Picture</label>
          <input
            type="file"
            class="form-control main-border"
            id="mi99"
          />
        </div> */}
        {/* <button type="button" class="btn btn-primary">
          <Link>Upload Documents</Link>
        </button> */}
        {/* <button type="button" class="btn btn-secondary" onClick={() => handleUploadPfp()}>
          Upload Profile Picture
        </button> */}
        <button type="button" class="btn btn-secondary" onClick={() => handleSubmit()}>
          Update Information
        </button>

      </ComponentContainer>
    </BaseContainer>
  )
}

export default ModifyInfoPage

export const accountQuery = graphql`
  query {
    allMongodbCluster0Accounts {
      edges {
        node {
          userId
          DOB
          address
          aiad
          aidd
          city
          dd
          eci
          ecn
          name
          sex
          state
          zipcode
          phone
          pfpUrl
        }
      }
    }
  }
` 