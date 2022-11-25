import React from 'react'
import {Link} from 'react-router-dom';

const ContactSection = ({letsTalkText,textColor,buttonText}) => {

  return (
    <div className="container ContactSection">
        <div className="row">
            <div className="col-12 col-lg-8 text-center">
               <div className='row text-start'>
                <h1 style={{color: textColor}} className='contactSectionHeading'>let's</h1>
               </div>
               <div className='row text-end '>
                <h1 style={{color: textColor}} className='contactSectionHeading'>Talk</h1>
               </div>
            </div>
            <div className='col my-5 pl-2'>
            <p className='contactSectionText'>{letsTalkText}</p>
            <Link to="/contact"><button className='contactSectionBtn'>{buttonText}</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection