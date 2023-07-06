import { ICard } from "../../models/ICard";

export interface ICardFormProps {
  Id: number | undefined,
  isOpen: boolean,
  onClose: () => void
}