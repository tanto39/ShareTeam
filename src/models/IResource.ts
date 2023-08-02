import { ICardSkill } from "./ICard"

export interface IResource{
  id: number | undefined,
  created: string,
  updated: string,
  status: string,
  jobTitle: string,
  person: string,
  rank: string,
  description: string,
  locationWorked: string,
  fromFree: string,
  endFree: string,
  skills: ICardSkill[],
};