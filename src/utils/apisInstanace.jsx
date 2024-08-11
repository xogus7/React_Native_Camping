import { create } from 'apisauce';

export const goCampInstance = create({
  baseURL: process.env.REACT_APP_GO_CAMPING_URL,
  headers: {
    'Content-type': 'Application/json',
    Accept: 'Application/json',
  },
});

export const swaggerInstance = create({
  baseURL: process.env.REACT_APP_SWAGGER_URL,
  headers: {
    'Content-type': 'Application/json',
    Accept: 'Application/json',
  },
});