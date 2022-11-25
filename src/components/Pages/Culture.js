import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer';
import {BsArrowRight} from "react-icons/bs";


const culture = () => {
  return (<>
  <div className="container-fluid CulturePage"> 
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-lg-7'>
          <h3 className='CulturePageHeading'>bring your unique self</h3>
        </div>
        <div className='col CulturePageParagraph'>
          Taking care of each other is core to how we operate at Big Spaceship. We strive to foster a culture of inclusivity where we take care of each other, regardless of age, gender identity, race, sexual orientation, religion, physical or mental ability, or ethnicity. We encourage everyone to bring their whole self and unique perspective to work every day; and we expect everyone to accept, respect, and value the unique perspectives and viewpoints of others. We commit to providing an environment where all members of our crew feel safe, respected, and that they belong.<br/><br/>
          Big Spaceship’s approach to diversity, equity and inclusion (DEI) starts with treating it as a fundamental organizational priority. We identify diverse talent and foster a culture of inclusivity that not only allows us to deliver against our goals but also ensures a safe space for all employees. We know and believe that diversity in all aspects makes us better in everything we do.
          <br/><br/>
          
          
          <div className="row">
            <div className='col-9'>Learn more about our DEI commitment here</div>
            <div className='col-3 my-auto '><BsArrowRight/></div>
          </div>
        </div>
      </div>
    </div>



    <Carousel indicators={false} wrap={false} >
    <Carousel.Item>
        <div className="conatiner">
          <div className="row text-center">
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f99e2e859365f16a29af3_Culture-1.png" />
            </div>
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9ae775c60fef8a1e5b3c_Culture-12.png" />
            </div>
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9a766d9bb08964f9522a_Culture-3.png" />
            </div>
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9a8ea40c75092cd7039d_Culture-5.png" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="conatiner">
          <div className="row gx-3">
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9af7dc48b32defd5d1cb_Culture-14-p-500.png" />
            </div>
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9b0875c60fe3541e5cd0_Culture-13-p-500.jpeg" />
            </div>
            <div className="col">
              <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9ad9da08936f47cf420f_Culture-11.png" />
            </div>
          </div>
        </div>
      </Carousel.Item>
     
    </Carousel>

    <div className='container CultureValues overflow-hidden'>
      <div className='row'>
        <div className='col-lg-6 text-lg-end CultureValueHeading mb-3'>our : values</div>
        <div className='col CultureValueText'>take care of each other</div>
      </div>

      <div className='row justify-content-end'>
        <div className='col-lg-6 CultureValueText'>collaborate inside and out</div>
      </div>
      <div className='row justify-content-end'>
        <div className='col-lg-6  CultureValueText'>speak up
          (no silent disagreement)</div>
      </div>
      <div className='row justify-content-end'>
        <div className='col-lg-6  CultureValueText'>produce amazing work</div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row px-3">
        <div className="col-12">
          <img className="img-fluid" src="https://assets-global.website-files.com/628d47631ab594280248e277/628f9ee7c110d4a38741aa2e_asset%2014.jpeg"/>
        </div>
      </div>
    </div>

    <div className="conatiner my-5">
    <div className='row justify-content-around'>
        <div className='col-lg-6 text-lg-end CultureValueHeading'>our manual</div>
        <div className='col-lg-5 CulturePageParagraph'>
        <p>During a hack day, a few folks wrote and illustrated a book explaining the way we work in detail. 
        It's doesn’t give details about 401k's or instructions for email setup. Rather it shares how we make 
        decisions as a team and as a company.</p>

         <div className="row my-3">
            <div className='col'><span className='me-4'>Download the Manual</span><BsArrowRight/></div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </div>
  </>)
}

export default culture