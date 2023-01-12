import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private authService: AuthService,
        private service: UserService,
    ) {}

    @Public()
    @Post('create')
    create(@Request() req) {
        return this.service.create(req.body);
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get('one/:id')
    getOne(@Request() req) {
        return this.service.getOne(req.params.id);
    }

    @Post('update/:id')
    update(@Request() req) {
        return this.service.update(req.params.id, req.body);
    }

    @Get('all')
    @Roles(Role.Admin)
    getAll() {
        return this.service.getAll();
    }

    @Post('delete/:id')
    @Roles(Role.Admin)
    delete(@Request() req) {
        return this.service.delete(req.params.id);
    }
}
