import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt.strategy';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'fuckoff',
      signOptions: { expiresIn: '10d' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy, SupabaseService],
})
export class AuthenticationModule {}
