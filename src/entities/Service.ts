import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Service extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_service: number;

    @Column()
    service: string;
}