import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMessage } from './interfaces/message.interface';

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message')private readonly messageModel) {}
  async createMessage(message: IMessage): Promise<IMessage> {
    const newMessage = this.messageModel(message);
    return await newMessage.save();
  }
  async updateMessage(id: string, message: IMessage): Promise<IMessage> {
    return await this.messageModel.findByIdAndUpdate(id, message, {new: true});
  }
  async deleteMessage(id: string): Promise<IMessage> {
    return await this.messageModel.findByIdAndDelete(id);
  }
}
