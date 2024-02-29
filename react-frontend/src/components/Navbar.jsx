import React from 'react'
// import logo from ''

const Navbar = () => {
  return (
    <nav class="nav flex-column bg-body-tertiary h-100">
      <div className='navbar-brand p-2 my-4'>
      <a class="navbar-brand" href="#">
      <img src="/logo.png" alt="Bootstrap" width="100%" />
    </a>
            {/* <h3><a className='' href="#">ECHOINSIGHTS</a></h3> */}
      </div>
      <div className="nav-item my-4">
      <a className='nav-link' href="#">Dashboard</a>
      </div>
      <div className="nav-item my-4">
      <a className='nav-link' href="#">Support</a>
      </div>
      <div className="nav-item my-4">
      <a className='nav-link' href="#">Build</a>
      </div>
  
  
</nav>
  )
}

export default Navbar