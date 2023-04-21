import { ICard, ICardSkill } from "../models/ICard";

export const cardListLocal:ICard[] = [
  {
    id: '001',
    title: 'Потребность 1',
    person: 'Иванов Иван Иванович',
    project: 'Цифровизация компании ПГТ',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд',
    endDate: '2023-08-08',
    skills: [
      { id: '1', name: 'JavaScript'},
      { id: '2', name: 'TypeScript'},
      { id: '3', name: 'React'},
      { id: '4', name: 'Redux'},
      { id: '5', name: 'VueJs'},
      { id: '6', name: 'Java'},
      { id: '7', name: 'ABAP'},
      { id: '8', name: 'Laravel'},
    ]
  },
  {
    id: '002',
    title: 'Потребность 2',
    person: 'Иванов Иван Иванович 2',
    project: 'Цифровизация компании ПГТ 2',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд 2',
    endDate: '2024-08-08',
    skills: [
      { id: '1', name: 'JavaScript'},
      { id: '2', name: 'TypeScript'},
      { id: '3', name: 'React'},
      { id: '4', name: 'Redux'},
      { id: '5', name: 'VueJs'},
      { id: '6', name: 'Java'},
      { id: '7', name: 'ABAP'},
      { id: '8', name: 'Laravel'},
    ]
  },
  {
    id: '003',
    title: 'Потребность 3',
    person: 'Иванов Иван Иванович 3',
    project: 'Цифровизация компании ПГТ 3',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд 3',
    endDate: '2024-02-08',
    skills: [
      { id: '1', name: 'JavaScript'},
      { id: '2', name: 'TypeScript'},
      { id: '3', name: 'React'},
      { id: '4', name: 'Redux'},
      { id: '5', name: 'VueJs'},
      { id: '6', name: 'Java'},
      { id: '7', name: 'ABAP'},
      { id: '8', name: 'Laravel'},
    ]
  },
  {
    id: '004',
    title: 'Потребность 4',
    person: 'Иванов Иван Иванович 4',
    project: 'Цифровизация компании ПГТ 4',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 4',
    endDate: '2023-08-08',
    skills: [
      { id: '1', name: 'JavaScript'},
      { id: '2', name: 'TypeScript'},
      { id: '3', name: 'React'},
      { id: '4', name: 'Redux'}
    ]
  },
  {
    id: '005',
    title: 'Потребность 5',
    person: 'Иванов Иван Иванович 5',
    project: 'Цифровизация компании ПГТ 5',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 5',
    endDate: '2023-08-08',
    skills: [
      { id: '1', name: 'JavaScript'},
      { id: '2', name: 'TypeScript'},
      { id: '3', name: 'React'},
      { id: '4', name: 'Redux'},
      { id: '5', name: 'VueJs'},
    ]
  },
  {
    id: '006',
    title: 'Потребность 6',
    person: 'Иванов Иван Иванович 6',
    project: 'Цифровизация компании ПГТ 6',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 6',
    endDate: '2023-08-08',
    skills: [
      { id: '1', name: 'JavaScript'}
    ]
  }
];

export const skills: ICardSkill[] = [
  { id: '1', name: 'JavaScript'},
  { id: '2', name: 'TypeScript'},
  { id: '3', name: 'React'},
  { id: '4', name: 'Redux'},
  { id: '5', name: 'VueJs'},
  { id: '6', name: 'Java'},
  { id: '7', name: 'ABAP'},
  { id: '8', name: 'Laravel'},
]