/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // Replace this with your actual user validation logic
    const { data: user, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    //console.log(user,error);
    if (error) {
      throw new InternalServerErrorException('User validation failed');
    }

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    console.log('null');
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(email: string, pass: string): Promise<any> {
    // Replace this with your actual user registration logic
    const hashedPassword = await bcrypt.hash(pass, 10);
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .insert([{ email, password: hashedPassword }])
      .select();
    console.log(data, error);
    if (error) {
      throw new InternalServerErrorException('User registration failed');
    }

    return data;
  }
}
