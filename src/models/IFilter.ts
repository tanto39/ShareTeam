import { ICardSkill } from "./ICard";

export interface IFilterSlice {
  filter: IFilter
}

export interface IFilter {
  jobTitle: string,
  cardTitle: string,
  description: string
  projectName: string,
  locationWorked: string,
  needBefore: string | null,
  endFree: string,
  skills: ICardSkill[],
}