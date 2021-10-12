import { GET_SERVICES } from '../type';

const ServicesReducer = (state, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
  }
};

export default ServicesReducer;
