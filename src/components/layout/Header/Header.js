import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="nav-header">
        <div className="app-title">{title}</div>
        <div className="navigations">
          <div className="nav-pages">
            <div className="how-it-works">
              <Link to="/howitworks">How It Works</Link>
            </div>
            <div className="advantages">
              <Link to="/advantages">Advantages</Link>
            </div>
            <div className="services">
              <Link to="/services">Services</Link>
            </div>
            <div className="btn-header"></div>
            <button className="btn" type="submit">
              <span className="btn-text">Apply to be an expert</span>
            </button>
          </div>
        </div>
      </div>
      <div className="current-page-header">
        <div className="current-page-title">Services</div>
        <div className="page-description">Experts covering your home's needs from the light bulb shade to remodeling.</div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'GREAT',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
