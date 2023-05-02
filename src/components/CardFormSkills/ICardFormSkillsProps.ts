import { ICardSkill } from "../../models/ICard";

export interface ICardFormSkillsProps {
  skills: ICardSkill[],
  onChange: ( 
    newTags: any[],
    key: string
  ) => void
}