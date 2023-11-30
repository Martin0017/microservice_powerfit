import { Module } from '@nestjs/common';
import { RewardController } from './controllers/reward.controller';
import { RewardService } from './services/reward.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from '../entities/activity.entity';
import { Administrador } from '../entities/administrator.entity';
import { Empresa } from '../entities/enterprise.entity';
import { Registro } from '../entities/register.entity';
import { Premio } from '../entities/reward.entity';
import { Usuario } from '../entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Actividad, Administrador, Empresa, Registro, Premio, Usuario, AuthModule])
  ],
  controllers: [RewardController],
  providers: [RewardService]
})
export class RewardModule {}
