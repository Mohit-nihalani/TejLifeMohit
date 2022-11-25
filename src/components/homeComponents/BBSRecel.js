import React from 'react'
import {BsArrowRight} from "react-icons/bs";

const BBSRecel = () => {
  return (
    <div className='container'>
        <div className='row'>
        <img className='img-fluid' src="https://assets-global.website-files.com/628d47631ab594280248e277/628ee001a33b0762fae69b70_reveal-logo.svg"/>
         </div>
        <div className='row my-5'>
        <div className='col-lg-8'>
            <p className="revelHeadingText">A diverse, always-on Gen Z community, ages 18-24, from across North America who share the opinions and emotions behind the trend line.</p>
        </div>
        <div className='col'>
            <p className="revelText">Through Reveal, we’ve discovered how Gen Z saves their money, fights for climate change, decides what to stream on the weekends, and how they’ve been navigating the COVID crisis.<br/></p>
            <p className="revelText"> Want to learn more about the panel and how we can tailor insights to your unique situation? We’re happy to answer any questions.</p>
        <a className="revelSignUp">Sign Up<span className='BsArrowRightCss'><BsArrowRight/></span></a>
        </div>
         </div>
    </div>
  )
}

export default BBSRecel