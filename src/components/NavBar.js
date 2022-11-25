import React, { useState } from 'react';
import { Pivot as Hamburger,Pivot } from 'hamburger-react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

  return (
    <div className='container-fluid position-fixed '>
        <div className='container-fluid text-white bg-success'>
            <div className='row'>
                <div className='col ms-5'><Link to="/"><img className="navbarLogo" src="https://assets-global.website-files.com/628d47631ab594280248e277/629799ae373cc318ce8a81b7_BSS_Logo_White.svg"/></Link></div>
                <div className='col d-flex justify-content-end me-5'>
                <Pivot toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>           
        </div>
        {isOpen && <div className='row bg-danger'>
            <div className='col-lg-3 border col-sm-6'><Link to="/workPage">workpage</Link></div>
            <div className='col-lg-3 border col-sm-6'><Link to="/culture">culture</Link></div>
            <div className='col-lg-3 border col-sm-6'><Link to="/contact">contact</Link></div>
            <div className='col-lg-3 border col-sm-6'><Link to="/career">career</Link></div>
        </div>}
    </div>
  )
}

export default NavBar