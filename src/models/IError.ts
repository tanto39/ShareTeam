export interface ICustomError {
  data: {
    error: string,
    path?: string,
    status: number | string,
    timestamp?: string,
  }
}