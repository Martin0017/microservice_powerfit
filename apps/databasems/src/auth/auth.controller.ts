
import { Controller, Get, Request, Post, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Request() req): Promise<{ access_token: string }> {
        const { secreto } = req.body;
        const isValidUser = await this.authService.validateUser(secreto);
        if (!isValidUser) {
            throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
        }

        const token = await this.authService.generateToken(secreto);
        return { access_token: token };
    }

    @Get('protected')
    @UseGuards(AuthGuard())
    protectedResource() {
        return 'Este recurso está protegido por JWT';
    }
}

