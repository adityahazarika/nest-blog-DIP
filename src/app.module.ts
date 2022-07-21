import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST||'localhost',
      port: 3306,
      username: process.env.DB_USER||'root',
      password: process.env.DB_PASSWORD||'root',
      database: process.env.DB_DATABASE||'test',
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
