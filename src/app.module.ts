import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MahasiswaModule } from "./mahasiswa/mahasiswa.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Mahasiswa } from "./mahasiswa/mahasiswa.entity";
import { Tugas } from "./Tugas/tugas.entity";
import { AuthModule } from "./Auth/auth.module";
import { TugasModule } from "./Tugas/tugas.module";

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username: 'root',
      password: 'yuleyek',  
      database: 'tugasMhs',
      entities:[Mahasiswa,Tugas],
      synchronize: false,
    }),
    TugasModule,
    MahasiswaModule,
    AuthModule
  ],
  controllers: [AppController],
    providers: [AppService],
})

export class AppModule{}