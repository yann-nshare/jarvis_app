import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    abonnement: string;

    @Column()
    pp_url: string;

    @Column()
    prestation_nbr: string;

    @Column()
    email: string;

    @Column()
    formule_type: string;
}