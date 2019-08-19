import { HttpException, Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async createUser(user: IUser): Promise<IUser> {
    if (await this.userModel.findOne({username: user.username}) === null) {
      const newUser = this.userModel(user);
      return await newUser.save();
    } else {
      throw new HttpException('Conflict. This user exist', 409);
    }
  }
  async updateUser(id: string, user: IUser): Promise<IUser> {
    return this.userModel.findByIdAndUpdate(id, user, {new: true});
  }
  async deleteUser(id: string): Promise<IUser> {
    return this.userModel.findByIdAndDelete(id);
  }
}
