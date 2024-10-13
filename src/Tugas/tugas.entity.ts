import { Mahasiswa } from "src/mahasiswa/mahasiswa.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tugas{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    deskripsi:string;

    @ManyToOne(()=>Mahasiswa,(mahasiswa)=>mahasiswa.tugas)
    mahasiswa:Mahasiswa
}