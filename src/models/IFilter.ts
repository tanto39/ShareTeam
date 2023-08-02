import { ICardSkill } from "./ICard";

export interface IFilterSlice {
  filter: IFilter
}

export interface IFilter {
  jobTitle: string,
  description: string
  projectName: string,
  locationWorked: string,
  needBefore: string | null,
  skills: ICardSkill[],
}