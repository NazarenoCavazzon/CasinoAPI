import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { UpdateBJCoinsDto } from './dto/update-bjcoins.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('api/users')
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
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put(':id/updateBJCoins')
  async updateBJCoins(@Param('id') id: string, @Body() updateBJCoinsDto: UpdateBJCoinsDto) {
    /*let body = {
      oneCoins: updateBJCoinsDto.oneCoins,
      fiveCoins: updateBJCoinsDto.fiveCoins,
      twentyFiveCoins: updateBJCoinsDto.twentyFiveCoins,
      hundredCoins: updateBJCoinsDto.hundredCoins,
      fiveHundredCoins: updateBJCoinsDto.fiveHundredCoins,
    } */
    return this.usersService.updateBJCoins(id, updateBJCoinsDto);
  }

}
