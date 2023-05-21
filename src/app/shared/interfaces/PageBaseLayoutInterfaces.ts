import { ReactNode } from 'react';

export interface IPageBaseLayoutInterfaces {
  title: string;
  toolbar?: ReactNode;

  children: React.ReactNode;
}
