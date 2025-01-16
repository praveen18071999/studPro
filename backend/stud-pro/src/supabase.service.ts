import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    console.log('SUPABASE_URL', this.configService.get<string>('SUPABASE_URL'));
    const SUPABASE_URL =
      this.configService.get<string>('SUPABASE_URL') ||
      'https://rkydvhsvwffocbkxmojg.supabase.co';
    const SUPABASE_API_KEY =
      this.configService.get<string>('SUPABASE_API_KEY') ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJreWR2aHN2d2Zmb2Nia3htb2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNjA5NzksImV4cCI6MjA1MDYzNjk3OX0.4U7m8X6cjWgpPrCuFLty5sJ6I7UrDD2I4ie5vxkeV34';
    this.supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
