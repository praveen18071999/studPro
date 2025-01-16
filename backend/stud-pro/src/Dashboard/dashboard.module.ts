import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [DashboardController],
  providers: [DashboardService, SupabaseService],
})
export class DashboardModule {}
