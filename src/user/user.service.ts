import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './Dtos/createUser';
import { UserLoginDto } from './Dtos/userLogin.Dto';

@Injectable()
export class UserServices {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(CreateUserDto) {
    return this.userRepository.create(CreateUserDto);
  }

  public async loginUser(UserLoginDto) {
    return this.userRepository.login(UserLoginDto);
  }
}
