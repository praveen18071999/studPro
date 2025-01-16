import { Controller, Get, Patch, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly userServive: UserService) {}
  @Patch('updateUser')
  async updateUser(@Req() req, @Res() res) {
    const response = await this.userServive.updateUser(
      req.body,
      req.user.id,
    );
    res.json(response);
  }

  @Get('getUser')
  async getUser(@Req() req, @Res() res) {
    console.log(req.user.userId);
    const response = await this.userServive.getUser(req.user.id);
    res.json(response);
  }
}
