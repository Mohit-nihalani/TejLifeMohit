import React from 'react';
import RecentWorks from '../homeComponents/RecentWorks';
import Cards from '../homeComponents/Cards';
import ContactSection from '../homeComponents/ContactSection';
import Footer from '../Footer'

const WorkPage = ({WorkPageSectionData,WorkPageCardData}) => {
  return (<>
  
     <div className="container-fluid border border-dark WorkPage">
     <div className="row justify-content-center mb-3">
     <div className='col-lg-7 mb-3'>
           <h1 className='workPageHeading'>thinking and making at the same time</h1>
         </div>
         <div className='col-lg-4 workPageParagraph'>
         <p>We believe in the importance of pushing creativity upstream and finding ways to bring experimentation into the process, without messing up what’s already working.<br/><br/>
         To get there, we test solutions as we develop insights, and we use our deep knowledge of culture and behavior to ensure that we’re rock-solid in our ideas, but not too precious with the outputs.<br/><br/>
         What does this mean for you? Work that meets your business goals while still putting people in the center.</p>
       </div>
     </div>

     <hr/>
       <ContactSection letsTalkText="We are always on the lookout for great clients who are passionate about their products and customers."/>
     <Footer/>
     

     </div>
    </>
  )
}

export default WorkPage



// <div className='container-fluid WorkPage'>
//       <div className='row justify-content-center mb-3'>
//         <div className='col-lg-7 mb-3'>
//           <h1 className='workPageHeading'>thinking and making at the same time</h1>
//         </div>
//         <div className='col-lg-4 workPageParagraph'>
//           <p>We believe in the importance of pushing creativity upstream and finding ways to bring experimentation into the process, without messing up what’s already working.<br/><br/>
//             To get there, we test solutions as we develop insights, and we use our deep knowledge of culture and behavior to ensure that we’re rock-solid in our ideas, but not too precious with the outputs.<br/><br/>
//             What does this mean for you? Work that meets your business goals while still putting people in the center.</p>
//         </div>
        
//       </div>
//       <hr/>
//       <RecentWorks recentWorkData={WorkPageSectionData} />
//       <Cards cardData={WorkPageCardData}/>
   

//     <ContactSection letsTalkText="We are always on the lookout for great clients who are passionate about their products and customers."/>
//     <Footer/>
//     </div> 
   
