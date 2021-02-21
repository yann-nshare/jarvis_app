import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Professional extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Username: string;

    @Column()
    Email: string;

    @Column()
    Service: string;

    @Column()
    Password: string;
}