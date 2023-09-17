import React, { useEffect, useMemo, useState } from "react"
import { graphql, navigate } from "gatsby"
import s from 'styled-components'
import axios from 'axios'
import TableCell from '../components/table'

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

const TableContainer = s.div`
  display: flex;
  align-items: center;
  justify-content: top;
  padding: 20px 80px;
  flex-direction: column;
  row-gap: 10px;
  background-color: #d9d9d9
`


const EmtMainPage = (props) => {
  // const [s0, setS0] = useState([])
  // const [s1, setS1] = useState([])
  // const [s2, setS2] = useState([])
  const [accs, setAccs] = useState([])
  const [tab, setTab] = useState(0)
  // const [trigger, setTrigger] = useState(false)
  // let temp
  // let temp1
  useEffect(() => {
    axios.get('http://localhost:3000/server/accall')
    .then(res => {
      setAccs(res['data'])
      // for (let i = 0; i < res['data'].length; i++) {
      //   temp1 = temp[i]
      //   console.log(temp1['status'])
      //   if (temp1['status'] === "0") {
      //     setS0(s0.concat([temp1]))
      //   } else if (temp1['status'] === "1") {
      //     setS1(s1.concat([temp1]))
      //   } else if (temp1['status'] === "2") {
      //     console.log(s2.concat([temp1]))
      //     setS2(s2.concat([temp1]))
      //     console.log(s2)
      //   }
      // }
    })
  }, [])

  // const handleAccept = info => {
  //   setS0(s0.filter(s => s !== info))
  //   setS1(s1.concat([info]))
  //   // axios.post('http://localhost:3000/server/mistatus', {
  //   //     userId: userId,
  //   //     status: "1" 
  //   // })
  //   // .then(setTrigger(!trigger))
  //   // .catch(e => console.log(e))
  // }

  // const handleFinish = info => {
  //   setS1(s1.filter(s => s !== info))
  //   setS2(s2.concat([info]))
  //   // axios.post('http://localhost:3000/server/mistatus', {
  //   //     userId: userId,
  //   //     status: "2" 
  //   // })
  //   // .then(setTrigger(!trigger))
  //   // .catch(e => console.log(e))
  // }
  // console.log(s0)
  // console.log(s1)
  // console.log(s2)
  // const displayStatus0 = () => {
  //   return accs.map(s => {s['status'] === "0" && <TableCell info={s}></TableCell>})
  // }

  // const displayStatus1 = () => {
  //   return accs.map(s => {s['status'] === "1" && <TableCell info={s}></TableCell>})
  // }

  // const displayStatus2 = () => {
  //   return accs.map(s => {s['status'] === "2" && <TableCell info={s}></TableCell>})
  // }
  // const userId = props.location.state.userId
  // const TableCell = ({info, status}) => {
  //   if (info['status'] !== status) {
  //     return <></>
  //   }
  //   let background
  //   if (info['status'] === "0") {
  //     background = "#f5c451"
  //   } else if (info['status'] === "1") {
  //     background = '#888eb5'
  //   } else if (info['status'] === "2") {
  //     background = '#58A942'
  //   }
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       border: 'solid',
  //       background: background,
  //     }}>
  //       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //         <div className="modal-dialog">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation of Request Acceptance</h1>
  //               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //             </div>
  //             <div className="modal-body">
  //               Are you sure you want to accept this request?
  //             </div>
  //             <div className="modal-footer">
  //               <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
  //               <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => handleAccept(info)}>Accept</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="modal fade" id="exampleModal1" tabIndex="-2" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  //         <div className="modal-dialog">
  //           <div className="modal-content">
  //             <div className="modal-header">
  //               <h1 className="modal-title fs-5" id="exampleModalLabel1">Confirmation of Request Finalization</h1>
  //               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //             </div>
  //             <div className="modal-body">
  //               Are you sure you want to finish this request?
  //             </div>
  //             <div className="modal-footer">
  //               <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
  //               <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => handleFinish(info)}>Finish</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div style={{
  //         display: 'flex',
  //       }}>
  //         <div>image</div>
  //         <div style={{
  //           display: 'flex',
  //           flexDirection: 'column'
  //         }}>
  //           <InfoText>{`Patient Name: ${info['name']}`}</InfoText>
  //           <InfoText>{`Address: ${info['address']}, ${info['city']}, ${info['state']} ${info['zipcode']}`}</InfoText>
  //           <InfoText>{`Medical Conditions: ${info['dd']}`}</InfoText>
  //           <InfoText>{`Patient Home Notes: ${info['aiad']}`}</InfoText>
  //           <InfoText>{`Patient Condition Notes: ${info['aidd']}`}</InfoText>
  //         </div>
  //       </div>
  //         <div style={{
  //           display: 'flex',
  //         }}>
  //           {info['status'] === "0" && <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  //             Accept Request
  //           </button>}
  //           {info['status'] === "1" && <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  //             Finish Request
  //           </button>}
  //         </div>
  //     </div>
  
  //   )
  // }
  
  return (
    <BaseContainer>
          <img src="/REDILogo.png" width="250"onClick={() => navigate('/')}/>

      <Title>Patient Status Dashboard</Title>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => setTab(0)}/>
        <label className="btn btn-outline-primary" for="btnradio1">Not Accepted</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setTab(1)}/>
        <label className="btn btn-outline-primary" for="btnradio2">In Progress</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={() => setTab(2)}/>
        <label className="btn btn-outline-primary" for="btnradio3">Completed</label>
      </div>
      <TableContainer>
        {tab === 0 && accs.map(a => <TableCell info={a} status={"0"}></TableCell>)}
        {tab === 1 && accs.map(a => <TableCell info={a} status={"1"}></TableCell>)}
        {tab === 2 && accs.map(a => <TableCell info={a} status={"2"}></TableCell>)}
      </TableContainer>
    </BaseContainer>
  )
}

export default EmtMainPage
