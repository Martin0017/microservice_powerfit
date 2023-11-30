import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BeforeInsert, JoinTable} from 'typeorm';
import { Usuario } from '../entities/user.entity';
import { Empresa } from '../entities/enterprise.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class Administrador {
    @PrimaryGeneratedColumn()
    id_admin: number;

    @OneToMany(() => Usuario, (usuario) => usuario.id_admin)
    id_user: Usuario[];

    @ManyToOne((type) => Empresa, (empresa) => empresa.id_admin, {
        eager: true,
    })
    @JoinTable()
    id_emp: Empresa[]


    @Column({ length: 25 })
    nombre_admin: string;

    @Column({ length: 25 })
    apellido_admin: string;

    @Column({ length: 50 })
    correo_admin: string;

    @Column({ length: 200 , default: "pass" , nullable:true})
    contrasena_admin: string;

    @BeforeInsert()
    async hashPassword() {
        const saltRounds = 10;
        this.contrasena_admin = await bcrypt.hash(this.contrasena_admin, saltRounds);
    }

}
