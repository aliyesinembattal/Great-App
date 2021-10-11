import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h1 className="info-title">Get in touch</h1>
        </div>
        <div className="footer-btn-content">
          <p className="info-content">Get to know our hiring process before you apply or find answers to any lindering questions, right here, right now.</p>
          <button type="button" className="top-footer-btn">
            Join
          </button>
        </div>
      </div>
      <div className="footer-mid">
        <div className="addresses">
          <div className="contact-info-top">
            <div className="info-top-one">
              <p>1447 2nd St</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="info-top-two">
              <p>1341 W Mockingbird Ln</p>
              <p>Dallas, TX 75247</p>
              <p>
                <li>
                  <a href="#">(214) 380-2666</a>
                </li>
              </p>
            </div>
          </div>
          <div className="contact-info-bottom">
            <div className="info-bottom-three">
              <p>333 SE 2nd Ave</p>
              <p>Suite 2000</p>
              <p>Miami, FL 33131</p>
              <p>
                <li>
                  <a href="#">(786) 833-9688</a>
                </li>
              </p>
            </div>
            <div className="info-bottom-four">
              <p>3 E Third Ave</p>
              <p>Suite 200</p>
              <p>San Mateo, CA 94401</p>
              <p>
                <li>
                  <a href="#">(415) 300-2889</a>
                </li>
              </p>
            </div>
          </div>
        </div>
        <div className="stunner-followus">
          <div className="stunner">
            <p className="stunner-title">Stunner</p>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Advantages of Great</a>
            </li>
            <li>
              <a href="#">45 Expert/Categories</a>
            </li>
            <li>
              <a href="#">Apply to be an expert</a>
            </li>
          </div>
          <div className="follow-us">
            <p className="followus-title">Follow us</p>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-one">
          <div className="company-name">
            <p className="copyright">© 2021 Great Inc.</p>
          </div>
          <div className="policies">
            <p className="privacy-policy">Privacy policy</p>
            <p className="cookie-policy">Cookie policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
