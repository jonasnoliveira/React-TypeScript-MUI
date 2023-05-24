export interface IListPerson {
  id: number;
  email: string;
  cityId: number;
  fullName: string;
}

export interface IDetailPerson {
  id: number;
  email: string;
  cityId: number;
  fullName: string;
}

export type TPeopleWithTotalCount = {
  data: IListPerson[];
  totalCount: number;
};
