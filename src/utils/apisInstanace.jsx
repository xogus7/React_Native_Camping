import { create } from 'apisauce';

export const goCampInstance = create({
  baseURL: REACT_APP_GO_CAMPING_URL,
});

export const swaggerInstance = create({
  baseURL: REACT_APP_SWAGGER_URL,
});