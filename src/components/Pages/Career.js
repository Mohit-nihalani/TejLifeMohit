import React, { useState } from "react";
import { Col, Nav, Row as div, Tab } from "react-bootstrap";
import Footer from "../Footer";

const Career = () => {
  const careerCatergory = [
    {
      eventKeyNumer: "first",
      tabPaneName: "account management",
      tabPaneText:
        "Account management sits at the heart of what we do. We really like to understand what is at the core of a client's business, and help bring that through to every stage of our work process.At Big Spaceship, the account team ensures clients feel we are an extension of their team, problem-solving through the challenges, and celebrating successes alongside them.We are inherently care-takers of each other, and believe that leads to creating amazing work.",
    },
    {
      eventKeyNumer: "second",
      tabPaneName: "art & copy",
      tabPaneText:
        "We are creators. A discipline driven by an insatiable curiosity and desire to make stuff. Big stuff. Fun stuff. Serious stuff. Seriously effective stuff.You get the idea, we don’t make one thing here. We approach each brief with the clients’ goals and the consumers’ needs top of mind. Pulling from our collective passion and experience to combine film, social, outdoor, digital, analogue, or experiential into the perfect solution for the task at hand.",
    },
    {
      eventKeyNumer: "third",
      tabPaneName: "design",
      tabPaneText:
        "Intention and purpose are at the heart of everything we undertake. To build intention we must design holistically. Always starting with human insight and behavior ensures we have purpose. We design for a wide array of capabilities; from brand identity, design systems and packaging, to advertising design, and motion. Across this spectrum three principles allow us to control the consistency, expressing our intention and purpose in the most direct way: creative strength, human clarity and quality.",
    },
    {
      eventKeyNumer: "fourth",
      tabPaneName: "experience design",
      tabPaneText:
        "User experience and interaction experience at Big Spaceship comes down to a simple philosophy: what exactly is the human need that we are trying to solve? We love design that removes pain points and creates moments of delight, all in the unique voice of the brand we are serving. To support rapid innovation, we favor ongoing testing and reviewing work-in-progress experiences over lengthy, static presentations. Platforms come and go, what is considered innovative today will be outdated soon. Paying attention to user needs will keep our clients successful - whatever the future holds.",
    },
    {
      eventKeyNumer: "fifth",
      tabPaneName: "production",
      tabPaneText:
        "We are the stewards of each project from strategic kick off to final delivery. As partners to our clients, and with process at the core of all we do, we ensure that time and budgets are utilized with the utmost efficiency while ensuring all deliverables measure up to Big Spaceship's high standards of craft and quality.We are made up of a variety of skill sets from product management, project management, content production, integrated production, business affairs - you name it, we can make it. We’re full service from ideation through delivery.",
    },
    {
      eventKeyNumer: "sixth",
      tabPaneName: "studio",
      tabPaneText:
        "We are producers, photographers, filmmakers, animators, editors and designers. We bring the idea on the page to life, and we use innovative in-house capabilities as well as strong relationships with industry partners to ensure that our clients’ budgets yield the most impactful results. We believe that content should be made for the platform it will live on, not just cropped, shortened or shoehorned and that aesthetic and message can, and should co-exist.",
    },
    {
      eventKeyNumer: "seven",
      tabPaneName: "strategy & analytics",
      tabPaneText:
        "Strategy & analytics at Big Spaceship is all about uncovering insights, found at the intersection of people and culture. We apply thoughtful rigor to strategic challenges of all shapes and sizes: from diagnosing tensions and opportunities among the foundational elements of a brand, to better understanding how people interact with each other and the world around them. We believe in flexibility and collaboration, pairing different types of strategic and analytical thinkers together to solve problems and inspire great ideas. When experience strategists get together with brand thinkers, when creative strategists partner with analysts, amazing things happen.",
    },
    {
      eventKeyNumer: "eight",
      tabPaneName: "social & community management",
      tabPaneText:
        "The Social & content team is deeply entrenched in the culture and communities that surround our brands. This focus on understanding people and behavior informs our approach to content creation, community management, and social-first experiences. This culture-powered approach uncovers fresh ways for brands to come to life on social and resonate with their audiences. Our team measures success by the strength of our stunning platform-native content, conversions of followers to advocates, and the agility that equips our brands to move at the speed of social.",
    },
    {
      eventKeyNumer: "nine",
      tabPaneName: "technology",
      tabPaneText:
        "The technology discipline at Big Spaceship is guided by over 30 years of combined development experience. Through deep collaboration internally and externally, we partner extensively along the journey to ensure all strategic goals are matched with innovative and efficient technologies.We are a full-stack development team, specializing in web and mobile application development with comprehensive expertise on many of today’s leading platforms, frameworks, and languages. We assist our partners in rolling out highly engaging experiences through our cultural customer obsession, rigorous quality assurance, and iterative validation. We’re invested in what we help you create, so we do everything in our power to make sure everything we design and build is successful, and stays that way.",
    },
    {
      eventKeyNumer: "ten",
      tabPaneName: "talent & culture",
      tabPaneText:
        "Our talent (aka “the crew’) and our culture is the heartbeat of Big Spaceship and this discipline embodies our core value to take care of each other. The talent & culture team ensures that our crew has the best possible work experience, from the minute they first interact with us in the recruiting and onboarding stage, through every touchpoint during their time at Big Spaceship. Our focus is on attracting, hiring, growing, and developing talent – while fostering an inclusive culture where everyone can bring their unique perspectives everyday, allowing us to produce amazing work with amazing people by our side.",
    },
  ];

  const [selected, setSelected] = useState(careerCatergory[0]);

  const handleChange = (e) => {
    function isSelected(careerCatergory) {
      return careerCatergory.tabPaneName === e.target.value;
    }
    setSelected(careerCatergory[careerCatergory.findIndex(isSelected)]);
  };

  return (
    <>
      <div className="container-fluid careerContainer">
        <div className="container careerContainerHero">
          <div className="row">
            <div className="col-lg-8 text-left">
              <h3 className="careerHeading mb-4">
                open <br />
                positions
              </h3>
            </div>
            <div className="col">
              <p className="careerParagraph">
                Our people are our most important asset and we make every effort
                to treat them as such. They are never viewed as a line item on a
                spreadsheet, or a percentage in a budget, but instead are at the
                fundamental core of who we are.
                <br />
                <br />
                So when it comes to finding the right talent, we treat the
                process with extra care and are always looking for people with a
                new perspective. We mine for those who see the world a little
                differently, who will disrupt our thinking and who will bring
                something extra to add to our crew. And when you give us the
                best of you, we'll give you the best of us.
              </p>
              <div>
                <button className="careerBtn">View Open Positions</button>{" "}
                <br />
                <br />{" "}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-left">
              <h3 className="careerHeading">
                humans <br />
                not robots
              </h3>
            </div>
            <div className="col">
              <p className="careerParagraph">
                We foster a culture of inclusion and welcome applicants of all
                races, genders, ages, identities, orientations, beliefs,
                abilities and experience levels. We pride ourselves on taking
                care of each other, and do not tolerate harassment,
                discrimination, or hate of any kind in our workplace. Our
                inclusive and nondiscriminatory policies and practices permeate
                throughout every stage of employment at Big Spaceship, from
                recruitment to engagement to career development and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden careerFieldsSection d-none d-lg-block d-md-block">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row justify-content-between gx-5">
              <div className="col-2 col-lg-3">
                <Nav variant="pills" className="flex-column">
                  {careerCatergory.map((career, index) => {
                    return (
                      <>
                        <Nav.Item key={index}>
                          <Nav.Link
                            className="careerFieldTab text-light"
                            eventKey={career.eventKeyNumer}
                          >
                            {career.tabPaneName}
                          </Nav.Link>
                        </Nav.Item>
                      </>
                    );
                  })}
                </Nav>
              </div>
              <div className="col-7 col-lg-8">
                <Tab.Content>
                  {careerCatergory.map((career, index) => {
                    return (
                      <>
                        <Tab.Pane key={index} eventKey={career.eventKeyNumer}>
                          <h3 className="careerFieldHeading">
                            {career.tabPaneName}
                          </h3>
                          <p className="careerFieldParagraph">
                            {career.tabPaneText}
                          </p>
                        </Tab.Pane>
                      </>
                    );
                  })}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>



        <div className="container d-md-none d-sm-block mt-5">
          <div className="row">
            <div className="col-12">
              <select onChange={handleChange} className="careerSelectBox">
                {careerCatergory.map((carer, index) => {
                  return <option className="selectBoxOption" key={index}>{carer.tabPaneName}</option>;
                })}
              </select>
            </div>
            <div className="col">
              <h2 className="selectBoxHeading">{selected.tabPaneName}</h2>
              <p className="selectBoxParagraph">{selected.tabPaneText}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Career;
