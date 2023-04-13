import { ICard } from "../../models/ICard";

export interface ICardFormProps {
  Id: string | boolean,
  isOpen: boolean,
  onClose: () => void
}