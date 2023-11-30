import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinTable, BeforeInsert } from 'typeorm';
import { Empresa } from '../entities/enterprise.entity';
import { Administrador } from '../entities/administrator.entity';
import { Registro } from '../entities/register.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id_user: number;

    @ManyToOne((type) => Empresa, (empresa) => empresa.id_user, {
        eager: true
    })
    @JoinTable()
    id_emp: Empresa;

    @ManyToOne((type) => Administrador, (administrador) => administrador.id_user,{
        eager: true
    })
    @JoinTable()
    id_admin: Administrador;

    @Column({ length: 25 })
    nombre_user: string;

    @Column({ length: 25 })
    apellido_user: string;

    @Column({ length: 50 })
    correo_user: string;


    @Column({ length: 200 , default: "pass" ,nullable:false})
    contrasena_user: string;

    @BeforeInsert()
    async hashPassword() {
        const saltRounds = 10;
        this.contrasena_user = await bcrypt.hash(this.contrasena_user, saltRounds);
    }

    @Column('date')
    fecha_nacimiento_user: Date;

    @Column({ length: 20 })
    genero_user: string;

    @OneToMany(() => Registro, registro => registro.id_user)
    id_reg: Registro[];
}
