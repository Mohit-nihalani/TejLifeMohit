import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-fluid">
        <div className='container text-white pb-4'>
            <div className='row'>
            <div className='col-8'>Brand Logo</div>
            <div className='col-4 d-flex justify-content-end'>
                <button><Link to="/terms">terms</Link>/</button>
                <button><Link to="/privacy">privacy</Link>/</button>
                <button><Link to="/transparency">transparency</Link></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer