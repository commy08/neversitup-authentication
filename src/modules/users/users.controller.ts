import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUserInfo(@Request() request) {
    const userRequest = request.user;

    const userInfo = await this.userService.findOneById(userRequest.id);

    return userInfo;
  }
}
