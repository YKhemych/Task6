import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(createUserDto);
  }
  @Put(':id')
  updateUser(@Param('id') id, @Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.updateUser(id, createUserDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<IUser> {
    return this.usersService.deleteUser(id);
  }
}
