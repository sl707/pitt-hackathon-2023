import axios from 'axios'
import React, { useState } from 'react'
import s from 'styled-components'
import {navigate} from 'gatsby'

const InfoText = s.p`
  margin: 0;
  text-align: left;
  font-size: 20px;
  padding: 0 5px;
`

const TableCell = ({info, status}) => {
  const [trigger, setTrigger] = useState(false)
  if (info['status'] !== status) {
    return <></>
  }
  let background
  if (info['status'] === "0") {
    background = "#f5c451"
  } else if (info['status'] === "1") {
    background = '#888eb5'
  } else if (info['status'] === "2") {
    background = '#58A942'
  }
  const handleAccept = async(info) => {
    axios.post('http://localhost:3000/server/mistatus', {
      userId: info['userId'],
      status: "1"
    })
    setTrigger(!trigger)
  }
  const handleFinish = async (info) => {
    axios.post('http://localhost:3000/server/mistatus', {
      userId: info['userId'],
      status: "2"
    })
    setTrigger(!trigger)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      border: 'solid',
      background: background,
      width: '600px'
    }}>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation of Request Acceptance</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to accept this request?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => handleAccept(info)}>Accept</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal1" tabIndex="-2" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1">Confirmation of Request Finalization</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to finish this request?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => handleFinish(info)}>Finish</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex',
        columnGap: '10px',
        padding: '10px'
      }}>
        <img src={info['pfpUrl']} alt={info['pfpUrl']} width="200px" height="150px" objectFit="cover"/>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <InfoText>{`Name: ${info['name']}`}</InfoText>
          <InfoText>{`Address: ${info['address']}, ${info['city']}, ${info['state']} ${info['zipcode']}`}</InfoText>
          <InfoText>{`Conditions: ${info['dd']}`}</InfoText>
          {/* <InfoText>{`Patient Home Notes: ${info['aiad']}`}</InfoText>
          <InfoText>{`Patient Condition Notes: ${info['aidd']}`}</InfoText> */}
        </div>
      </div>
        <div style={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'space-between'
        }}>
          {info['status'] === "0" && <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Accept Request
          </button>}
          {info['status'] === "1" && <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Finish Request
          </button>}
          <button style={{color: '#d9d9d9 !important'}} type="button" className="btn btn-primary" onClick={() => navigate('/client-profile', {state: {userId: info['userId'], emt: true}})}>
            More Details
          </button>
        </div>
    </div>

  )
}

export default TableCell
