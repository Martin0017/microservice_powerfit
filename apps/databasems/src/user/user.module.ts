import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from '../entities/activity.entity';
import { Administrador } from '../entities/administrator.entity';
import { Empresa } from '../entities/enterprise.entity';
import { Registro } from '../entities/register.entity';
import { Premio } from '../entities/reward.entity';
import { Usuario } from '../entities/user.entity';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Actividad, Administrador, Empresa, Registro, Premio, Usuario, AuthModule])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
