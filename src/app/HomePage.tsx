import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container">
      <div style={{position: 'absolute', top: '20%', left: '40%'}}>
        <div className="column">
          <div>
            <h1>Welcome to Job offers</h1>
          </div>
        </div>
        <div style={{position: 'relative', marginTop: '20%', left: '40%'}}>
          <Link to="/jobs" className="btn btn-outline-primary">
            Check jobs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
