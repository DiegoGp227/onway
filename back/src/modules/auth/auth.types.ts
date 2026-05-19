export interface ICreateUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUser {
  email: string;
  password: string;
}
