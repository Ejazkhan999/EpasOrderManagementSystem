import { Injectable } from '@nestjs/common/decorators';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserServices } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor() // private userServices: UserServices, // private jwtService: JwtService,
  {}
  async hashPassword(password) {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  async issueToken(email, _id) {
    const seceret = process.env.SECERET;
    const payload = { email: email, seceret: seceret, sub: _id };
  }

  //   async validateUserCreaentials(
  //     email: String,
  //     password: String,
  //   ): Promise<any> {}
}
