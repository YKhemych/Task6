import { Role } from './role';

export interface IUser {
  username: string;
  password: string;
  role: Role;
}
