export type TUserResponse = {
  data: TUser
  support: TSupport
}

export type TUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export type TSupport = {
  url: string
  text: string
}

export interface TUsersResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TUser[]
  support: TSupport
}
