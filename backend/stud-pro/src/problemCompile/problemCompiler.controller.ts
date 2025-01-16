/* eslint-disable prettier/prettier */
import { Controller, Request, Post, Res, UseGuards } from "@nestjs/common";
import { ProblemCompilerService } from "./problemCompiler.service";
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller("problemCompile")
@UseGuards(JwtAuthGuard)
export class ProblemCompilerController {
    constructor(private readonly problemCompilerService: ProblemCompilerService) {}
  @Post("compileAndRun")
  async compile(@Request() req,@Res() res) {
    const result=[];
    //console.log(req.body);
    for(let i=0;i<req.body.input.length;i++){
      const response=await this.problemCompilerService.compile(req.body.language, req.body.code, req.body.input[i], req.body.expectedOutput[i]);
      result.push(response);
      if(response.error){
        break;
      } 
    }
    console.log(result);
    res.json(result);
  }

  @Post("submit")
  async submit(@Request() req,@Res() res) {
    const result=[];
    let successCount=0;
   // console.log(req.body);
    for(let i=0;i<req.body.input.length;i++){
      const response=await this.problemCompilerService.compile(req.body.language, req.body.code, req.body.input[i], req.body.expectedOutput[i]);
      result.push(response);
      if(response.success){
        successCount++;
      }
      if(response.error){
        break;
      } 
    }
    //console.log(successCount,req.body.input.length);
    if(successCount === req.body.input.length){
      //console.log(1);
      const response=await this.problemCompilerService.updateProblem(req.body.problem,req.body.userid,"test",true,req.body.marks);
      console.log(response);
    }
    res.json(result)
  }
  @Post("changeProgram")
  async changeProgram(@Request() req, @Res() res) {
    const response= await this.problemCompilerService.changeProgram(req.body.language, req.body.code);
    res.json(response);
  }
}