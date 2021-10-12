import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_SERVICES } from '../type';
import ServicesContext from './servicesContext';
import ServicesReducer from './servicesReducer';

const ServicesState = (props) => {
  const initialState = {
    services: [],
  };

  const [state, dispatch] = useReducer(ServicesReducer, initialState);

  // Get Services

  const getServices = async (skip, limit) => {
    const res = await axios.get(`https://basework-frontend-case-api.herokuapp.com/services/${skip}/${limit}`);

    dispatch({
      type: GET_SERVICES,
      payload: res.data,
    });
  };

  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        getServices,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesState;
