import { Enviroments } from 'app/shared/environments';
import { Api } from '../axios-conig';
import { IDetailPerson, TPeopleWithTotalCount } from 'app/shared/interfaces';

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPeopleWithTotalCount | Error> => {
  try {
    const relativeURL = `/people?_page=${page}&_limit=${Enviroments.LINES_LIMIT}&fullName_like=${filter}`;

    const { data, headers } = await Api.get(relativeURL);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Enviroments.LINES_LIMIT),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os registros.'
    );
  }
};

const getById = async (id: number): Promise<IDetailPerson | Error> => {
  try {
    const { data } = await Api.get(`/people/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao listar o registro.');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar o registro.'
    );
  }
};

const create = async (
  dados: Omit<IDetailPerson, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetailPerson>('/people', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao crir o registro.');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao criar o registro.'
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetailPerson
): Promise<void | Error> => {
  try {
    await Api.put(`/people/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro.'
    );
  }
};

const deleteById = async (id: number): Promise<any> => {
  try {
    const { data } = await Api.delete<IDetailPerson>(`/people/${id}`);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao apagar o registro.'
    );
  }
};

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
