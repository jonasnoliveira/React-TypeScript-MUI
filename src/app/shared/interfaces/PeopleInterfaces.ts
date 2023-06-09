export interface IListPerson {
  id: number;
  email: string;
  fullName: string;
  cityId: number;
  age: number;
}

export interface IDetailPerson {
  id: number;
  email: string;
  fullName: string;
  cityId: number;
  age: number;
}

export type TPeopleWithTotalCount = {
  data: IListPerson[];
  totalCount: number;
};

export interface IFormData {
  fullName: string;
  email: string;
  cityId: number;
  age: number;
}
