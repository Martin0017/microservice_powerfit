import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RegisterModule } from './register/register.module';
import { ActivityModule } from './activity/activity.module';
import { RewardModule } from './reward/reward.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { AdministratorModule } from './administrator/administrator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from './entities/activity.entity';
import { Administrador } from './entities/administrator.entity';
import { Empresa } from './entities/enterprise.entity';
import { Registro } from './entities/register.entity';
import { Premio } from './entities/reward.entity';
import { Usuario } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'martin',
      password: 'martin',
      database: 'Powerfit',
      entities: [Actividad, Administrador, Empresa, Registro, Premio, Usuario],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    UserModule, RegisterModule, ActivityModule, RewardModule, EnterpriseModule, AdministratorModule, AuthModule
  ],
controllers: [],
providers: [],
})
export class AppModule {}
