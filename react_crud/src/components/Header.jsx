import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-danger">
            <div className="col-md-12 d-flex ">
                <Link to='/' className='nav-link text-white me-5 ms-auto'>Home</Link>
                <Link to='list' className='nav-link text-white me-auto' >List</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
