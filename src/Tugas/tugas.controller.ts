import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guards";
import { CreateTugasDto } from "src/helper/create-tugas";
import { TugasService } from "./tugas.service";

@Controller('tugas')
export class TugasController{
    constructor(private readonly tugasService:TugasService){}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createTugas(@Body() createTugasDto:CreateTugasDto, @Req() req){
        const userId=req.user.userId
        console.log(req.user.userId)
        return this.tugasService.Create(createTugasDto,userId)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Req() req){
        const userId=req.user.userId
        console.log(userId)
        return this.tugasService.findAll(userId)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id:string,@Req() req){
        const userId=req.user.userId
        return this.tugasService.findOne(userId,id)
    }
}