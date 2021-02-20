import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Email: string;

    @Column()
    Phone_nbr: string;

    @Column()
    Services: string;

    @Column()
    id_service: number;

    @Column()
    Password: string;

    @Column()
    PP_url: string;
}