import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from '../auth/auth.service';

@Module({
    providers: [
        AuthService,
        UserService,
    ],
    exports: [UserService],
    controllers: [UserController],
})
export class UsersModule {}
