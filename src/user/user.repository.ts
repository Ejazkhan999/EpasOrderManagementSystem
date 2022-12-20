import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.entity';
import { AuthService } from 'src/helperFunctions/auth.Services';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private authService: AuthService,
     private jwtService: JwtService
  ) {}
  //*** Create User ! */
  async create(user: User): Promise<User> {
    const isUser = await this.findOne(user.email);
    if (isUser) {
      throw new BadRequestException('User with this email already exist !');
    } else {
      user.password = await this.authService.hashPassword(user.password);
      const newUser = new this.userModel(user);
      return newUser.save();
    }
  }

  //*** Find User  */
  async findOne(email): Promise<User> {
    let user = await this.userModel.findOne({ email: email });
    return user;
  }

  async login(UserLoginDto) {
    const { email, password } = UserLoginDto;
    const isUser = await this.findOne(email);
    if (!isUser) {
      throw new HttpException(
        'No User found against this email',
        HttpStatus.NOT_FOUND,
      );
    }
    let hashPassword = isUser.password;
    let comparePasswords = await this.authService.comparePassword(
      password,
      hashPassword,
    );
    // console.log(`comparePasswords is ${comparePasswords}`);
    if (comparePasswords === true) {
      return isUser;
    } else {
      throw new HttpException('invalid password', HttpStatus.UNAUTHORIZED);
    }
  }
  async issueToken(user:any){
    const payload = {}
  }

 
}
