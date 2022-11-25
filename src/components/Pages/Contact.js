import React from "react";
import ContactSection from "../homeComponents/ContactSection";
import Footer from "../Footer";
const contact = () => {
  const contactPageHeading = "Our Office"
  const contactPageTextPart1 =  "44 Wall Street 23rd Floor New York, NY 10005 ";
  const contactPageTextPart2 = "Distributed with NYC & Seattle hubs."
  return (
    <>
    <div className="container-fluid ContactPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <ContactSection letsTalkText={<><h4>{contactPageHeading}</h4><p>{contactPageTextPart1}</p><p>{contactPageTextPart2}</p><br/></>} textColor="#0fc8c2" buttonText="Looking for a job"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-left">
            <p className="contactPageParagraph">
              We’d love to hear from you and show you more of our work! Just
              fill out the form and you will hear from one of us.
            </p>
            <div className="row justify-content-center">
            <a className="contactPageEmailLink" href="mailto:webmaster@example.com">info@bigspaceshipclone.com</a>
            </div>
          <hr className="contactPageHr"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control emailInput text-light"
                  placeholder="your email"
                />
              </div>
              <div>
                <p className="formParagraph">What would you like to discuss?</p>
                <div className="form-check my-3">
                  <input
                    className="form-check-input formRadio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label formRadioLabel"
                    htmlFor="flexRadioDefault1"
                  >
                    I am looking for a job
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input formRadio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label formRadioLabel"
                    htmlFor="flexRadioDefault2"
                  >
                    I want to discuss a potential project
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input formRadio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label formRadioLabel"
                    htmlFor="flexRadioDefault2"
                  >
                    I am partner/vendor
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input formRadio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label formRadioLabel"
                    htmlFor="flexRadioDefault2"
                  >
                    I want to talk
                  </label>
                </div>
                <div className="mb-3">
                  <textarea id="message"
                    className="form-control"
                    maxLength={5000}
                    placeholder="Tell us a bit more if you'd like"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input agreeCheckBox"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label agreeLabel" htmlFor="flexCheckDefault">
                Ever wonder where people find the best news, GIFs, and trends from across the Internet? Subscribe to our Internet Brunch to see our secret recipe.
                </label>
              </div>
              <button className="formSubmitBtn mb-5" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
    </>
  );
};

export default contact;
