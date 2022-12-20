import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { AuthService } from 'src/helperFunctions/auth.Services';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.entity';
import { UserRepository } from './user.repository';
import { UserServices } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserRepository, UserServices, AuthService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
