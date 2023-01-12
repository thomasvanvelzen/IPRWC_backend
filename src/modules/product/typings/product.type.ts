import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class Product {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    category_id:
        | 'discount'
        | 'sportswear'
        | 'weightlifting'
        | 'cardio'
        | 'bodyweight';
}
