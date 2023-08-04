export interface IPaginationSlice {
  pagination: IPagination,
}

export interface IPagination {
  page: number,
  pageSize: string,
}