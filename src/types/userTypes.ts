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
export type TUserCurrent = {
  id: number
  email: string
  fullName: string
  avatar: string
  isLike: boolean
}

export type TSupport = {
  url: string
  text: string
}

export type TUsersResponse = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TUser[]
  support: TSupport
}

export type TUserUpdateResponse = {
  id: number
  avatar: string
  updatedAt: string
}

export type TUserUpdateData = Omit<TUserUpdateResponse, "updatedAt">
