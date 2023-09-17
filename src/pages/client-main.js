import React, { useLocation } from "react"
import s from "styled-components"
import { Link, graphql, navigate } from 'gatsby'

const BaseContainer = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  row-gap: 5px;
  padding: 20px;
`

const ButtonContainer = s.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

const Title = s.p`
  margin: 0 auto;
  padding: 0;
  font-size: 30px;
`



const IndexPage = (props) => {
  const userId = props.location.state.userId
  return (
    <BaseContainer>
          <img src="/REDILogo.png" width="250"/>

      <div>ID: {userId}</div>
      <Title>Patient Information</Title>
      <ButtonContainer>
        <button type="button" class="btn btn-primary">
          Upload Documents
        </button>
        <button type="button" class="btn btn-primary">
          Upload Profile Picture
        </button>
        <button type="button" class="btn btn-primary" onClick={() => navigate('/modify-information', {state: {userId: userId}})}>
          Modify Personal Information
        </button>
        <button type="button" class="btn btn-primary">
          View My Information
        </button>
      </ButtonContainer>
    </BaseContainer>
  )
}

export default IndexPage
