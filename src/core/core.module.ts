import { Global, Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../modules/auth/constants/constants';

@Global()
@Module({
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: 60 * 60 * 24 * 7 },
        }),
    ],
    exports: [JwtModule],
})
export class CoreModule {}
