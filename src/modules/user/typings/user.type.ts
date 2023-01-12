import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class User {
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;
}
