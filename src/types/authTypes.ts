export type TAuthData = {
  email: string;
  password: string;
}

export type TAuthResponse = {
  id: string;
  token: string | null;
}