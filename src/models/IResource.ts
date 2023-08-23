import { ICardSkill, IOwnerDetail } from "./ICard";

export interface IResourceList {
  totalPages: number,
  content: IResource[],
};

export interface IResource{
  id: number | undefined,
  created: string,
  updated: string,
  status: string,
  jobTitleResource: string,
  cardTitle: string,
  rank: string,
  description: string,
  locationWorked: string,
  fromFree: string,
  endFree: string,
  skills: ICardSkill[],
  ownerId: number,
  teammateId: number,
  ownerDetail: IOwnerDetail,
};