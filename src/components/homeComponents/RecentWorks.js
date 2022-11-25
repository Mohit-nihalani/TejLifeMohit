import React from "react";

const RecentWorks = ({ title, recentWorkData }) => {

    
  return (
    <>
      <div className="container recenWorksTitle">
        <h2 className="text-wrap">{title}</h2>
        {title && <hr />}
      </div>

      <div className="container recentWorksContent">
        {recentWorkData.map((recentWork, index) => {
          return (
            <a key={index} className="text-decoration-none " href="#">
              <div className="row">
                <div className="col-lg-3">
                  <p>{recentWork.title}</p>
                  <h4>{recentWork.heading}</h4>
                </div>
                <div className="col-lg-9">
                  <img className="img-fluid" src={recentWork.imgSrc} />
                </div>
              </div>
              <hr className="recentWorkHr" />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default RecentWorks;
