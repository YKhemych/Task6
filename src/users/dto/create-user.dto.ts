
export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly role: 'USER' | 'ADMIN';
}
