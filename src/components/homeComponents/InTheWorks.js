import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const InTheWorks = () => {

    const inTheWorksData = [
        { paragraph: "A first of its kind stock index voice skill for a leading international financial services organization." },
        { paragraph: "Redefining the U.S. brand strategy for a global electronics company." },
        { paragraph: "Re-launching a new plant-based protein drink nationwide." },
        { paragraph: "Bringing holiday joy when many traditions have been interrupted." },
        { paragraph: "A new site to help more people make the switch to clean energy." },
        { paragraph: "An evergreen content series for your favorite navigation app to support local and Black-owned businesses." }
    ]
    return (
        <div className='container inTheWorksSection'>
            <h2>In the works</h2>
            <div className='row mb-4'>

                {inTheWorksData.map((inWorkData, index) => {
                    return (
                        <div key={index} className='col-6 col-lg-4 inTheWorkSectionContent'>
                            <hr />
                            <p>{inWorkData.paragraph}</p>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
                <div className='col text-end ContactUsLink'> <a href="#">Want to Chat? <span><BsArrowRight/></span></a>
                </div>
              
            </div>
            <hr />
        </div>
    )
}

export default InTheWorks