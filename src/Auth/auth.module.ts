import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { MahasiswaModule } from "../mahasiswa/mahasiswa.module";
import { JwtStrategy } from "./jwt.auth.stategy";

@Module({
    imports:[
        MahasiswaModule,
        PassportModule,
        JwtModule.register({
            secret:'mfaiqr',
            signOptions:{expiresIn:'60m'},
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers:[AuthController],

})

export class AuthModule{}