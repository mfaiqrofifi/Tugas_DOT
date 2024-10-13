import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mahasiswa } from "src/mahasiswa/mahasiswa.entity";
import { Tugas } from "./tugas.entity";
import { TugasService } from "./tugas.service";
import { TugasController } from "./tugas.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Mahasiswa,Tugas])],
    providers:[TugasService],
    controllers:[TugasController],
})

export class TugasModule{}