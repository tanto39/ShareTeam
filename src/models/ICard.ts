export interface ICard {
  id: string,
  title: string,
  teamId: string,
  person: string,
  project: string,
  description: string,
  endDate: string,
  skills: ICardSkill[]
};

export interface ICardSkill {
  id: string,
  name: string
};

export interface ICardProject {
  id: string,
  name: string
}
export interface ITeam {
  id: string,
  name: string
}