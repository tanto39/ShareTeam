import { ICardSkill } from "./ICard";

export interface IFilterSlice {
  filter: IFilter
}

export interface IFilter {
  person: string,
  project: string,
  teamId: string,
  endDate: string | null,
  skills: ICardSkill[]
}