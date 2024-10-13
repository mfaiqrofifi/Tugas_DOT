import { JwtService } from "@nestjs/jwt";
import { MahasiswaService } from "../mahasiswa/mahasiswa.service";
import * as bcrypt from 'bcryptjs';
import { Inject } from "@nestjs/common";

export class AuthService{
    constructor(
        @Inject() private mahasiswaService: MahasiswaService,
        private readonly jwtService: JwtService
    ){
        console.log('AuthService initialized');
    }
    async validatUser(email:string, password:string):Promise<any>{
        console.log(email,password)
        const mahasiswa=await this.mahasiswaService.findByEmail(email);
        if (mahasiswa&&(await bcrypt.compare(password,mahasiswa.password))){
            const{password, ...result}=mahasiswa;
            return result;
        }
        return null;
    }
    async login(mahasiswa:any){
        const payload={email:mahasiswa.email, sub:mahasiswa.id};
        return{
            access_token:this.jwtService.sign(payload)
        }
    }
}
