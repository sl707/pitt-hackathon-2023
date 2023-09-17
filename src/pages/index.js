import * as React from "react"
import { navigate } from "gatsby"
import s from 'styled-components'

const BaseContainer = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  padding-bottom: 10000px;
  background: #ebd76e;
  margin: 0 auto;
`

const IndexPage = () => {
  return (
    <BaseContainer>
      <img src="/FallenPeople.png" width="1500"/>
      <button type="button" style={{fontSize: '50px', width: '25%'}} class="btn btn-secondary" onClick={() => navigate('/login')}>
        Login
      </button>
    </BaseContainer>
)}

export default IndexPage
