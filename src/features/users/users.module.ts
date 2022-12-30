import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common/common.module';
import { UserController } from './controllers/user.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }]
    ),
    CommonModule
  ],
  controllers: [UserController], 
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
