import { ICard, ICardProject, ICardSkill, ITeam } from "../models/ICard";

export const cardListLocal:ICard[] = [
  {
    id: '001',
    title: 'Потребность 1',
    person: 'Иванов Иван Иванович',
    teamId: '1',
    project: '1',
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
    teamId: '2',
    person: 'Иванов Иван Иванович 2',
    project: '2',
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
    teamId: '3',
    project: '3',
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
    teamId: '4',
    project: '4',
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
    teamId: '5',
    project: '5',
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
    teamId: '6',
    project: '6',
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
];

export const projects: ICardProject[] = [
  { id: '1', name: 'Цифровизация компании ПГТ'},
  { id: '2', name: 'Цифровизация компании ПГТ 2'},
  { id: '3', name: 'Цифровизация компании ПГТ 3'},
  { id: '4', name: 'Цифровизация компании ПГТ 4'},
  { id: '5', name: 'Цифровизация компании ПГТ 5'},
  { id: '6', name: 'Цифровизация компании ПГТ 6'}
];

export const teams: ITeam[] = [
  { id: '1', name: 'Команда 1'},
  { id: '2', name: 'Команда 2'},
  { id: '3', name: 'Команда 3'},
  { id: '4', name: 'Команда 4'},
  { id: '5', name: 'Команда 5'},
  { id: '6', name: 'Команда 6'}
];