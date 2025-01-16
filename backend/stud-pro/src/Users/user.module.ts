import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService, SupabaseService],
})
export class UserModule {}
