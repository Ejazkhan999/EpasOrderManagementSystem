import {
  Controller,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
} from '@nestjs/common';
import { UserServices } from './user.service';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './Dtos/createUser';
import { User } from './user.entity';
import { UserLoginDto } from './Dtos/userLogin.Dto';

@Controller('user')
export class UserController {
  constructor(private userServices: UserServices) {}

  @Post('/addUser')
  @UsePipes(ValidationPipe)
  addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userServices.createUser(createUserDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  UserLogin(@Body() userLoginDto: UserLoginDto): Promise<User> {
    return this.userServices.loginUser(userLoginDto);
  }
}
