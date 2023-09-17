import React, { useState } from "react"
import s from "styled-components"
import { Link, graphql, navigate } from 'gatsby' 

const BaseContainer = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  row-gap: 10px;
  padding: 20px;
  width: 500px;
  padding-top: 300px;
`
const ComponentContainer = s.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 300px;
`

const Title = s.p`
  margin: 0 auto;
  padding: 0;
  font-size: 25px;
`

const LoginPage = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const accounts = props.data.allMongodbCluster0Accounts.edges
  // const showPassword = () => {
  //   var x = document.getElementById("password")
  //   if (x.type === "password") {
  //     x.type = "text"
  //   } else {
  //     x.type = "password"
  //   }
  // }

  const handleLogIn = () => {
    for (const a in accounts) {
      const account = accounts[a]['node']
      if (username === account['username'] && password === account['password']) {
        if (account['type'] === "client") {
          navigate("/client-profile", {
            state: {userId: account['userId']}
          })
        } else {
          navigate("/emt-main", {
            state: {userId: account['userId']}
          })
        }
      }
    }
  }

  return (
    <BaseContainer>
          <img src="/REDILogo.png" width="250"onClick={() => navigate('/')}/>

      <Title>Log In To Your Account</Title>
      <ComponentContainer>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control main-border"
            id="username"
            placeholder="Enter username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control main-border"
            id="password"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="button" class="btn btn-secondary" onClick={() => handleLogIn()}>
          Log In
        </button>
      </ComponentContainer>
      {/* <Link>Sign-up</Link> */}
      {/* {accounts.map(a => <div>{a.node.username}{a.node.password}{a.node.userId}</div>)} */}
    </BaseContainer>
  )
}

export default LoginPage

export const loginQuery = graphql`
  query {
    allMongodbCluster0Accounts {
      edges {
        node {
          userId
          username
          password
          type
        }
      }
    }
  }
` 
