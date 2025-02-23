import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}
  async updateUser(userData: any, user_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .update(userData)
      .eq('id', user_id)
      .select('name,email,phoneNumber');
    // console.log(data);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getUser(user_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('name,email,phoneNumber')
      .eq('id', user_id);
   // console.log(data);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getUserDetails(id: number): Promise<any> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    //console.log(data, error);
    if (error) {
      throw new InternalServerErrorException('User details fetch failed');
    }

    return data;
  }
}
