import {
    Controller,
    Body,
    Post,
    Get,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { Role } from 'src/modules/auth/enums/role.enum';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { ProductService } from './product.service';
import { Product } from './typings/product.type';

@Controller('product')
export class ProductController {
    constructor(private service: ProductService) {}

    @Public()
    @Get('all')
    getAll() {
        return this.service.getAll();
    }

    @Public()
    @Get('one/:id')
    getOne(@Param('id') id: string) {
        return this.service.getOne(id);
    }

    @Public()
    @Post('many')
    getMany(@Body() productIds: string[]) {
        return this.service.getMany(productIds);
    }

    
    @Public()
    @Post('create')
    // @Roles(Role.Admin)
    create(@Body() product: Product): Promise<Product[]> {
        return this.service.create(product);
    }

    @Put('update/:id')
    @Roles(Role.Admin)
    update(@Param('id') id: string, @Body() product: Product) {
        return this.service.update(id, product);
    }

    @Delete('delete/:id')
    @Roles(Role.Admin)
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
