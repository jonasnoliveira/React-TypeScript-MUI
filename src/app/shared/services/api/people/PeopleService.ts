import { Enviroment } from 'app/shared/environments';
import { Api } from '../axios-conig';
import { TPeopleWithTotalCount } from 'app/shared/interfaces';

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPeopleWithTotalCount | Error> => {
  try {
    const relativeURL = `/people?_page=${page}_limit=${Enviroment.LINES_LIMIT}&last_name_like=${filter}`;

    const { data, headers } = await Api.get(relativeURL);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Enviroment.LINES_LIMIT),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros.'
    );
  }
};

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
