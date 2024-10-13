import { InjectRepository } from "@nestjs/typeorm";
import { Tugas } from "./tugas.entity";
import { Repository } from "typeorm";
import { CreateTugasDto } from "src/helper/create-tugas";
import { Injectable, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guards";
import { Mahasiswa } from "src/mahasiswa/mahasiswa.entity";

@Injectable()
export class TugasService{
    constructor(
        @InjectRepository(Tugas)
       private tugasRepository:Repository<Tugas>,

       @InjectRepository(Mahasiswa)
       private mahasiswaRepository:Repository<Mahasiswa>,  
    ){}

    async Create(createTugasDto:CreateTugasDto,id:number):Promise<Tugas>{
        const mahasiswa=await this.mahasiswaRepository.findOne({where:{id:id}})
        if (!mahasiswa) {
            throw new Error('User not found');  // Jika user tidak ditemukan
        }
        const tugas=this.tugasRepository.create({...createTugasDto,mahasiswa})
        return this.tugasRepository.save(tugas);
    }
    async findAll(id:number):Promise<Tugas[]>{
        const mahasiswa=await this.mahasiswaRepository.findOne({where:{id:id}})
        if (!mahasiswa) {
            throw new Error('User not found');  // Jika user tidak ditemukan
        }
        return this.tugasRepository.find(
            {
                where:{mahasiswa:{id}},
                relations:['mahasiswa']
            }
        )
    }
    async findOne(id:number,idTugas):Promise<Tugas>{
        const mahasiswa=await this.mahasiswaRepository.findOne({where:{id:id}})
        if (!mahasiswa) {
            throw new Error('User not found');  // Jika user tidak ditemukan
        }
        return this.tugasRepository.findOne({
            where:{id:idTugas},
            relations:['mahasiswa']
        })
    }

}