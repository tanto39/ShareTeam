import React from 'react';

export interface ITopBarLinks {
  link: string;
  title: string
};

export const topBarLinks: ITopBarLinks[] = [
  { link: '/', title: 'Потребности' },
  { link: '/resources', title: 'Ресурсы' }
]