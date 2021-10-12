import React from 'react';
import './Service.scss';

const Service = ({ service: { icon, title, category, people } }) => {
  return (
    <div className="services-card">
      <img src={icon} alt="" className="service-icon" />
      <h4 className="service-title">{title}</h4>
      <p className="service-category">{category}</p>
      <img src={people[0].avatar} alt="" className="service-people-avatar1" />
      <img src={people[1].avatar} alt="" className="service-people-avatar2" />
      <p className="service-people-names">
        {people[0].name} + {people[1].name}
      </p>
    </div>
  );
};

export default Service;
