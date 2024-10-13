import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mahasiswa } from "./mahasiswa.entity";
import { MahasiswaService } from "./mahasiswa.service";
import { MahasiswaController } from "./mahasiswa.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Mahasiswa])],
    providers:[MahasiswaService],
    controllers:[MahasiswaController],
    exports: [MahasiswaService],
})

export class MahasiswaModule{}