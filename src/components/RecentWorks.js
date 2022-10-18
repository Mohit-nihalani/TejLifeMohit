import React from 'react'

const RecentWorks = () => {
    return (<>
        <div className='container'>
            <div className='row'>
                <div className="col-lg-5 my-3"> <span className='recentWorkTitle'>recent<br />work</span></div>
            </div>
            <hr />
            <div className='row my-5'>
                <div className='col-lg-4'>
                <h3 className='work_client-tag'>Starbucks</h3>
                <h4 className='heading-medium'>Celebrating 50 <br/>years</h4>
                </div>
                <div className='col-lg-8'>
                    <img className='img-fluid' src="https://assets-global.website-files.com/628d47631ab594280248e277/62e1636475f217a451752e7c_sbux-feature-img-p-800.webp"/>
                </div>
            </div>

            <hr />
            <div className='row my-5'>
                <div className='col-lg-4'>
                <h3 className='work_client-tag'>Evolve</h3>
                <h4 className='heading-medium'>A digital-first <br/>relaunch for a plant-based protein</h4>
                </div>
                <div className='col-lg-8'>
                    <img className='img-fluid' src="https://assets-global.website-files.com/628d47631ab594280248e277/62e177e064bc1534c37f9937_IMG-p-800.webp"/>
                </div>
            </div>

            <hr />
            <div className='row my-5'>
                <div className='col-lg-4'>
                <h3 className='work_client-tag'>JetBlue</h3>
                <h4 className='heading-medium'>Creating the next <br/>revolution in flight search</h4>
                </div>
                <div className='col-lg-8'>
                    <img className='img-fluid' src="https://assets-global.website-files.com/628d47631ab594280248e277/62e163594a1683538f5b0870_jetblue-feature-img-p-800.jpg"/>
                </div>
            </div>

        </div>


        
    </>
    )
}

export default RecentWorks;