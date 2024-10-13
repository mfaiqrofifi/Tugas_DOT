import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMahasiswaDto } from "src/helper/create-mahasiswa";
import { MahasiswaService } from "./mahasiswa.service";

@Controller('mahasiswa')
export class MahasiswaController{
    constructor(private readonly mahasiswaService:MahasiswaService){}

    @Post('register')
    async register(@Body() createMahasiswaDto:CreateMahasiswaDto){
        return this.mahasiswaService.register(createMahasiswaDto);
    }
    
    @Get()
    findAll(){
        return this.mahasiswaService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.mahasiswaService.findOOne(+id)
    }
}