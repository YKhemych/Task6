import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async createUser(user: IUser): Promise<IUser> {
      const newUser = this.userModel(user);
      return await newUser.save();
  }
  async updateUser(id: string, user: IUser): Promise<IUser> {
    return this.userModel.findByIdAndUpdate(id, user, {new: true});
  }
  async deleteUser(id: string): Promise<IUser> {
    return this.userModel.findByIdAndDelete(id);
  }
  async findOne(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username });
  }
}
