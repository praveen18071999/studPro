import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @Post('login')
  async login(@Req() req, @Res() res) {
    const { email, password } = req.body;
    //console.log(email,password);
    const user = await this.authenticationService.validateUser(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await this.authenticationService.login(user);
    return res.json(token);
  }

  @Post('register')
  async register(@Req() req, @Res() res) {
    const { email, password } = req.body;
    const user = await this.authenticationService.registerUser(email, password);
    if (!user) {
      return res.status(401).json({ message: 'User already exists' });
    }
    return res.json(user);
  }

}
