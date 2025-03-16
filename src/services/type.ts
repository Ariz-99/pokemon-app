export interface PaginationInfo {
  offset: number;
}

export interface ResponseData extends PaginationInfo {
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
