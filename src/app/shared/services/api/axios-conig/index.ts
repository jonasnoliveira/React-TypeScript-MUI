import axios from 'axios';
import { errorInteceptor, responseInterceptor } from './interceptors';
import { Enviroments } from 'app/shared/environments';

const Api = axios.create({ baseURL: Enviroments.URL_BASE });

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInteceptor(error)
);

export { Api };
