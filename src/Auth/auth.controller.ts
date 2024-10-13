import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    
    @Post('login')
    async login(@Body() loginDto:{
        email:string,
        password:string
    }){
        const mahasiswa=await this.authService.validatUser(loginDto.email,loginDto.password);
        if(!mahasiswa){
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.authService.login(mahasiswa)
    }
}