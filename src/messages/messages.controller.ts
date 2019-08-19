import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { IMessage } from './interfaces/message.interface';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto): Promise<IMessage> {
    return this.messagesService.createMessage(createMessageDto);
  }
  @Put(':id')
  updateMessage(@Param('id') id, @Body() createMessageDto: CreateMessageDto): Promise<IMessage> {
    return this.messagesService.updateMessage(id, createMessageDto);
  }
  @Delete(':id')
  deleteMessage(@Param('id') id): Promise<IMessage> {
    return this.messagesService.deleteMessage(id);
  }
}
