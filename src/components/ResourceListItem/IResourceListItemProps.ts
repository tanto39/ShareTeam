import { IResource } from "../../models/IResource";

export interface IResourceListItemProps {
  resource: IResource,
  onOpen: (Id: number | undefined) => void
}