import { ICard } from "../../models/ICard";

export interface ICardListItemProps {
  card: ICard,
  onOpen: (Id: string) => void
}