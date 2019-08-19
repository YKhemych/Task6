import { Role } from '../interfaces/role';

export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly role: Role;
}
