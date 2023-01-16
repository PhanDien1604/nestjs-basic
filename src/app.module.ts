import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UserModule,
    NoteModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/nestjsbasic'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
