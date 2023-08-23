export interface ICardList {
  totalPages: number,
  content: ICard[],
}
export interface ICard {
  id: number | undefined,
  created?: string,
  updated?: string,
  status?: string,
  jobTitle: string,
  teamId: string,
  person: string,
  projectName: string,
  rank: string,
  description: string,
  locationWorked: string,
  needBefore: string,
  skills: ICardSkill[],
  ownerId: number,
  ownerDetail?: IOwnerDetail,
};

export interface ICardSkill {
  id: string,
  skill: string,
  description?: string,
};

export interface IOwnerDetail {
  id: number,
  lastname: string,
  firstname: string,
}

export interface ICardProject {
  id: string,
  name: string
}
export interface ITeam {
  id: string,
  name: string,
  created?: string,
  updated?: string,
  status?: string,
  description?: string,
  ownerId?: number
}