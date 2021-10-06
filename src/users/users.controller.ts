import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action removes a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return `This action updates a #${id} user: ${JSON.stringify(updateUserDto)}`;
  }

}
