export interface ICustomError {
  data?: {
    message?: string,
    error?: string,
    path?: string,
    status: number | string,
    timestamp?: string,
  },
  error?: string,
  status?: number | string,
}