// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'secreto_secretisimo', // Reemplaza con tu clave secreta
            signOptions: { expiresIn: '24h' },
        }),
    ],
    providers: [JwtStrategy, AuthService],
    exports: [JwtModule, PassportModule],
    controllers: [AuthController],
})
export class AuthModule {}


