import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ServicesContext from '../../../context/services/servicesContext';
import Service from '../../service/Service';
import tick from '../Header/assets/Vector.svg';
import './ServiceList.scss';

const Content = () => {
  const servicesContext = useContext(ServicesContext);

  const { getServices } = servicesContext;

  const [page, setPage] = useState(30);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 30);
    }
  }, []);

  useEffect(() => {
    getServices(0, page);
  }, [page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const { services } = servicesContext;

  return (
    <div className="content">
      <div className="services-content">{services.length > 0 && services.map((service) => <Service service={service} />)}</div>
      <div className="content-bottom">
        <div className="content-bottom-texts">
          <div className="text-one">
            <img className="tick" src={tick} alt="" />
            <h4>Manage your task</h4>
            <p>No matter what the size of the task is we will manage it and find solutions for you. From cleaning to junk removal to fixing we have got you covered.</p>
          </div>
          <div className="text-two">
            <img className="tick" src={tick} alt="" />
            <h4>Define the scope of work</h4>
            <p>We will have the subject-matter expert define the scope of work.</p>
          </div>
          <div className="text-three">
            <img className="tick" src={tick} alt="" />
            <h4>Vet licensed vendor</h4>
            <p>We make sure they have a license, valid insurance, criminal background check, and are trusted in their local community.</p>
          </div>
          <div className="text-four">
            <img className="tick" src={tick} alt="" />
            <h4>3 Quotes, until you are satisfied.</h4>
            <p>We will get 3 quotes, If not satisfied we will get more quotes at no cost.</p>
          </div>
        </div>
        <div className="sub-content">
          <div className="slogan">
            <h3 className="sub-slogan">Stay up to speed on the latest at Great.</h3>
          </div>
          <div className="sub-info">
            <input className="email-input" type="email" name="email" id="email" placeholder="jsmith@example.com" />
            <p className="input-info">
              By submitting this form, you agree to our <u>Terms of Use</u> and our <u>Privacy Policy</u>.
            </p>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label className="checkbox-label" htmlFor="checkbox">
              Additionally, I’d like to stay informed about local events
            </label>
            <p>
              <button className="sub-btn" type="submit">
                <span>Subscribe</span>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div ref={loader} />
    </div>
  );
};

export default Content;
