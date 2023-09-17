import axios from 'axios'
import React, { useState } from 'react'


const TriggerPage = () => {
  const [fall, setFall] = useState(false)
  const handleTrigger = () => {
    setFall(true)
    axios.post('http://localhost:3000/server/trigger')
  }

  return (
    <div>
      {!fall && <button type="button" class="btn btn-secondary" onClick={() => handleTrigger()}>Fall Button</button>}
       {fall && <p style={{fontSize: '100px'}}>HELP! I'VE FALLEN AND I CAN'T GET UP!</p>}
    </div>
  )
}

export default TriggerPage
