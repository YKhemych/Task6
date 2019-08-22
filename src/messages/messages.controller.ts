import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { IMessage } from './interfaces/message.interface';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('messages')
@UseGuards(AuthGuard('jwt'))
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto): Promise<IMessage> {
    return this.messagesService.createMessage(createMessageDto);
  }
  @Put(':id')
  @UseGuards(RolesGuard)
  updateMessage(@Param('id') id, @Body() createMessageDto: CreateMessageDto): Promise<IMessage> {
    return this.messagesService.updateMessage(id, createMessageDto);
  }
  @Delete(':id')
  @UseGuards(RolesGuard)
  deleteMessage(@Param('id') id): Promise<IMessage> {
    return this.messagesService.deleteMessage(id);
  }
}
