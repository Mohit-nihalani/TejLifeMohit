import React from 'react'
import {BsArrowRight} from "react-icons/bs";
const Features = () => {

    const featureData=[
        {featureTitle:"brand innovation & transformation",
        fetaureParagraph:"We’re your partner in defining and articulating your brand as an entity that meets the changed expectations people now have for any organization – whether they’re considering becoming a customer or a member of your team.",
        featureLink:"Starbucks - Welcome back",
        featureList: {item1:"growth strategy", item2:"brand strategy", item3:"innovation strategy", item4:"c-suite narrative",}
        },
        {featureTitle:"research & intelligence",
        fetaureParagraph:"Our deep practice in cultural and behavioral intelligence helps our partners center people in their operations with more nuance and flexibility. And our proprietary methods and offerings help you operate in both the now and the next.",
        featureLink:"NFL - Confettii tweets",
        featureList: {item1:"marketing intelligence", item2:"culture briefing", item3:"measurement and reporting", item4:"media consultation",}
        },
        {featureTitle:"customer experience design",
        fetaureParagraph:"You need a partner that understands more than just how to design great products and services. We understand how to create strong bonds with the larger world of your brand, which is how true loyalty is earned.",
        featureLink:"JetBlue - Kind design",
        featureList: {item1:"cx strategy", item2:"experience design", item3:"visual identity", item4:"e-commerce",item5:"web & mobile development",item6:"native & pwa development" , item7:"product design"}
        },
        {featureTitle:"culture, content, & community",
        fetaureParagraph:"We balance strategy, creativity, production, and delivery to create truly resonant modern content across the proliferation of platforms and all channels.",
        featureLink:"IRC - The power of welcome",
        featureList: {item1:"campaign development", item2:"content strategy", item3:"social & influencer marketing", item4:"video & content production"}
        }
    ]

  return (
    <div className='container featureSection'>
    <div className='row'>
    
       {featureData.map((feature,index)=>{
        return( 
          <div key={index} className='col-lg-6'>
            <div className='featureDiv'>
            <h3 className='featureTitleText'> {feature.featureTitle}</h3>
            <p className='featureParagraphText'>{feature.fetaureParagraph}</p>
        <div className='featureLink'><a href='#'>{feature.featureLink}<span className='featureArrowIcon'> <BsArrowRight/></span></a></div>
        <hr/> 
        <ul className='featureList'>
            <li className='featureListItem'>{feature.featureList.item1}</li>
            <li className='featureListItem'>{feature.featureList.item2}</li>
            <li className='featureListItem'>{feature.featureList.item3}</li>
            <li className='featureListItem'>{feature.featureList.item4}</li>
            {feature.featureList.item5 && <li className='featureListItem'>{feature.featureList.item5}</li>}
            {feature.featureList.item6 && <li className='featureListItem'>{feature.featureList.item6}</li>}
            {feature.featureList.item7 && <li className='featureListItem'>{feature.featureList.item7}</li>}
        </ul>
        </div>
        </div>
        )
       })}
    
    </div>
    </div>
  )
}

export default Features