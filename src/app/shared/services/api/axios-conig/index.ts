import axios from 'axios';
import { errorInteceptor, responseInterceptor } from './interceptors';
import { Enviroment } from 'app/shared/environments';

const Api = axios.create({ baseURL: Enviroment.URL_BASE });

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInteceptor(error)
);

export { Api };
