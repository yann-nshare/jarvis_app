import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Professional extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Email: string;

    @Column()
    Username: string;

    @Column()
    id_service: number;

    @Column()
    Password: string;
}

export default Professional