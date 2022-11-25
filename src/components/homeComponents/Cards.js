import React from "react";
const Cards = ({ cardData }) => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => {
          return (
            <div key={index} className="col-6 col-md-6 col-lg-4 CardsContainer">
              <a href="#">
                <img className="img-fluid CardsImage" src={card.imgSrc} />
                <p className="CardsSubTitle">{card.subTitle}</p>
                <h3>{card.title}</h3>
              </a>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="row my-5 justify-content-center text-center">
          <div className="col-12 ">
            <button className=" CardBtn">View all case studies</button>
          </div>
        </div>
      </div>
      {/* https://webdeasy.de/en/top-css-buttons-en/ */}
    </div>
  );
};

export default Cards;
