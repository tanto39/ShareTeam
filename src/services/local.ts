import { ICard, ICardProject, ICardSkill, ITeam } from "../models/ICard";

export const cardListLocal:ICard[] = [
  {
    id: '001',
    jobTitle: 'Потребность 1',
    person: 'Иванов Иван Иванович',
    teamId: '1',
    projectName: 'Цифровизация компании ПГТ',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд',
    needBefore: '2023-08-08',
    skills: [
      { id: '1', skill: 'JavaScript'},
      { id: '2', skill: 'TypeScript'},
      { id: '3', skill: 'React'},
      { id: '4', skill: 'Redux'},
      { id: '5', skill: 'VueJs'},
      { id: '6', skill: 'Java'},
      { id: '7', skill: 'ABAP'},
      { id: '8', skill: 'Laravel'},
    ]
  },
  {
    id: '002',
    jobTitle: 'Потребность 2',
    teamId: 'Цифровизация компании ПГТ 2',
    person: 'Иванов Иван Иванович 2',
    projectName: '2',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд 2',
    needBefore: '2024-08-08',
    skills: [
      { id: '1', skill: 'JavaScript'},
      { id: '2', skill: 'TypeScript'},
      { id: '3', skill: 'React'},
      { id: '4', skill: 'Redux'},
      { id: '5', skill: 'VueJs'},
      { id: '6', skill: 'Java'},
      { id: '7', skill: 'ABAP'},
      { id: '8', skill: 'Laravel'},
    ]
  },
  {
    id: '003',
    jobTitle: 'Потребность 3',
    person: 'Иванов Иван Иванович 3',
    teamId: '3',
    projectName: 'Цифровизация компании ПГТ 3',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции фронтенд бэкэнд 3',
    needBefore: '2024-02-08',
    skills: [
      { id: '1', skill: 'JavaScript'},
      { id: '2', skill: 'TypeScript'},
      { id: '3', skill: 'React'},
      { id: '4', skill: 'Redux'},
      { id: '5', skill: 'VueJs'},
      { id: '6', skill: 'Java'},
      { id: '7', skill: 'ABAP'},
      { id: '8', skill: 'Laravel'},
    ]
  },
  {
    id: '004',
    jobTitle: 'Потребность 4',
    person: 'Иванов Иван Иванович 4',
    teamId: '4',
    projectName: 'Цифровизация компании ПГТ 4',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 4',
    needBefore: '2023-08-08',
    skills: [
      { id: '1', skill: 'JavaScript'},
      { id: '2', skill: 'TypeScript'},
      { id: '3', skill: 'React'},
      { id: '4', skill: 'Redux'}
    ]
  },
  {
    id: '005',
    jobTitle: 'Потребность 5',
    person: 'Иванов Иван Иванович 5',
    teamId: '5',
    projectName: 'Цифровизация компании ПГТ 5',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 5',
    needBefore: '2023-08-08',
    skills: [
      { id: '1', skill: 'JavaScript'},
      { id: '2', skill: 'TypeScript'},
      { id: '3', skill: 'React'},
      { id: '4', skill: 'Redux'},
      { id: '5', skill: 'VueJs'},
    ]
  },
  {
    id: '006',
    jobTitle: 'Потребность 6',
    person: 'Иванов Иван Иванович 6',
    teamId: '6',
    projectName: 'Цифровизация компании ПГТ 6',
    description: 'Проекты в сфере разработки, интеграции, обязателен опыт интеграции 6',
    needBefore: '2023-08-08',
    skills: [
      { id: '1', skill: 'JavaScript'}
    ]
  }
];

export const skills: ICardSkill[] = [
  { id: '1', skill: 'JavaScript'},
  { id: '2', skill: 'TypeScript'},
  { id: '3', skill: 'React'},
  { id: '4', skill: 'Redux'},
  { id: '5', skill: 'VueJs'},
  { id: '6', skill: 'Java'},
  { id: '7', skill: 'ABAP'},
  { id: '8', skill: 'Laravel'},
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