import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemCompilerModule } from './problemCompile/problemCompiler.module';
import { FlowChartModule } from './flowChart/flowChart.module';
import { ExtractProblemModule } from './extractProblem/extractProblem.module';
import { ProblemCreationModule } from './problemCreation/problemCreation.module';
import { SupabaseService } from './supabase.service';
import { AuthenticationModule } from './Authentication/authentication.module';
import { LeaderboardModule } from './Leaderboard/leaderboard.module';
import { DashboardModule } from './Dashboard/dashboard.module';
import { UserModule } from './Users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    ProblemCompilerModule,
    FlowChartModule,
    ExtractProblemModule,
    ProblemCreationModule,
    AuthenticationModule,
    LeaderboardModule,
    DashboardModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
