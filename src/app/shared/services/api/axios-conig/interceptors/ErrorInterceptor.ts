import { AxiosError } from 'axios';

export const errorInteceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão.'));
  }

  if (error.response?.status === 401) {
  }

  return Promise.reject(error);
};
