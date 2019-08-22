import { Controller, Request, Get, UseGuards, Post, Body, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    if ( await this.usersService.findOne(createUserDto.username) === null) {
      return this.usersService.createUser(createUserDto);
    } else {
      throw new HttpException('Conflict. This user already exist', 409);
    }
  }
}
