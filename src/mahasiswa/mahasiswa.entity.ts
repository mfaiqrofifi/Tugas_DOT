import { Tugas } from "src/Tugas/tugas.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Mahasiswa{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @OneToMany(()=>Tugas,(tugas)=>tugas.mahasiswa)
    tugas:Tugas[];
}