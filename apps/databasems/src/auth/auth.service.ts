// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async generateToken(username: string): Promise<string> {
        const payload = { username };
        const token = this.jwtService.sign(payload, { expiresIn: '24h' }); 
        return token;
    }

    async validateUser(secret: string): Promise<boolean> {
        // Compara las credenciales con un valor fijo
        const _secret = 'secreto_jwt_losdatosquemadosmolan';

        return secret === _secret
    }

}
