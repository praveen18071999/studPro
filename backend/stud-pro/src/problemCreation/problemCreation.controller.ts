import {
  Controller,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProblemCreationService } from './problemCreation.service';
import { Multer } from 'multer';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('problemCreation')
@UseGuards(JwtAuthGuard)
export class ProblemCreationController {
  constructor(
    private readonly ProblemCreationService: ProblemCreationService,
  ) {}

  @Post('createProblem')
  async createProblem(@Req() req, @Res() res) {
    //console.log(req.body);
    const response = await this.ProblemCreationService.createProblem(
      req.body.questionLink,
      req.body.problemTitle,
      req.body.baseTestCaseInputs,
      req.body.baseTestCasesOutputs,
      req.body.baseTestCasesExplanation,
      req.body.actualTestCaseInputs,
      req.body.actualTestCasesOutputs,
      req.body.problemLevel,
      req.body.totalMarks,
    );
    res.json(response);
  }

  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('questionFile'))
  async uploadFile(@UploadedFile() file: Multer.File, @Req() req, @Res() res) {
    const response = await this.ProblemCreationService.readFile(
      file,
      req.body.problemTitle,
      JSON.parse(req.body.baseTestCaseInputs),
      JSON.parse(req.body.baseTestCasesOutputs),
      JSON.parse(req.body.baseTestCasesExplanation),
      JSON.parse(req.body.actualTestCaseInputs),
      JSON.parse(req.body.actualTestCasesOutputs),
      req.body.problemLevel,
      req.body.totalMarks,
      req.user.id
    );
    res.json(response);
  }
}
