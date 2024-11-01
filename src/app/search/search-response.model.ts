import { Item } from './search-item.model';

export interface YouTubeSearchResponse {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
