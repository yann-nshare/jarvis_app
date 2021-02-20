import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

class Service {
    @PrimaryGeneratedColumn()
    id_service: number;

    @Column()
    service: string;
}