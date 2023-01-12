import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from 'src/modules/user/user.service';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { HttpModule } from '@nestjs/axios';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
    providers: [
        AuthService,
        UserService,
        ProductService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
    exports: [ProductService],
    controllers: [ProductController],
    imports: [HttpModule],
})
export class ProductModule {}
