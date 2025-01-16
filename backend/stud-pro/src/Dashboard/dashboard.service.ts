import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class DashboardService {
  constructor(private readonly supabaseService: SupabaseService) {}
  async getProblemDashboardCharts(userid: number) {
    try {
      //const response = [];
      const data = await levelWise(this.supabaseService, userid);
      return data;
    } catch (error) {
      console.error('Error getting dashboard charts:', error);
      throw new InternalServerErrorException('Failed to get dashboard charts');
    }
  }

  async getMonthlySolvedProblems(userid: number) {
    try {
      const data = await monthWise(this.supabaseService, userid);
      return data;
    } catch (error) {
      console.error('Error getting monthly solved problems:', error);
      throw new InternalServerErrorException(
        'Failed to get monthly solved problems',
      );
    }
  }

  async getAuthoredProblems(userid: number) {
    try {
      const data = await authoredProblems(this.supabaseService, userid);
      return data;
    } catch (error) {
      console.error('Error getting authored problems:', error);
      throw new InternalServerErrorException('Failed to get authored problems');
    }
  }
  async getAllProblems(
    pageS: number,
    title: string,
    level: string,
    marks: number,
    author: string,
  ) {
    try {
      const data = await allProblems(
        this.supabaseService,
        pageS,
        title,
        level,
        marks,
        author,
      );
      return data;
    } catch (error) {
      console.error('Error getting all problems:', error);
      throw new InternalServerErrorException('Failed to get all problems');
    }
  }
}

const allProblems = async (
  supabaseService: SupabaseService,
  pages: number,
  title: string,
  level: string,
  mark: number,
  problemauthorname: string,
) => {
  const { data, error } = await supabaseService
    .getClient()
    .rpc('allpublishedproblems', {
      level,
      mark,
      pages,
      problemauthorname,
      title,
    });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const authoredProblems = async (
  supabaseService: SupabaseService,
  user_id: number,
) => {
  const { data, error } = await supabaseService
    .getClient()
    .rpc('totalproblemscreated', {
      user_id,
    });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
const monthWise = async (supabaseService: SupabaseService, user_id: number) => {
  const { data, error } = await supabaseService
    .getClient()
    .rpc('problemsolvedmonthwise', {
      user_id,
    });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const levelWise = async (supabaseService: SupabaseService, user_id: number) => {
  const { data, error } = await supabaseService
    .getClient()
    .rpc('getproblemlevelstatistics', {
      user_id,
    });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
