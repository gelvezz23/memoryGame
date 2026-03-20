export interface ILoginDto {
  email: string;
  password: string;
}

export interface IUserResponseDto {
  id: string;
  username: string;
  token: string;
}
