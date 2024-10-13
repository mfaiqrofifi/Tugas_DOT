import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mahasiswa } from "./mahasiswa.entity";
import { Repository } from "typeorm";
import { CreateMahasiswaDto } from "src/helper/create-mahasiswa";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class MahasiswaService{
    constructor(
        @InjectRepository(Mahasiswa)
        private mahasiswaRepository:Repository<Mahasiswa>,
    ){}

    async register(createMahasiswaDto:CreateMahasiswaDto):Promise<Mahasiswa>{
        const hashedPassword=await bcrypt.hash(createMahasiswaDto.password,10);
        const mahasiswa=this.mahasiswaRepository.create({
            ...createMahasiswaDto,
            password:hashedPassword,
        })
        return this.mahasiswaRepository.save(mahasiswa)
    }
    async findByEmail(email:string):Promise<Mahasiswa|undefined>{
        console.log(email)
        return this.mahasiswaRepository.findOne({where:{email}})
    }
    findAll():Promise<Mahasiswa[]>{
        return this.mahasiswaRepository.find({relations:['tugas']})
    }
    findOOne(id:number):Promise<Mahasiswa>{
        return this.mahasiswaRepository.findOne(
            {
                where:{id},
                relations:['tugas']
            }
        )
    }
}