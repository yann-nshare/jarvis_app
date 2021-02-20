import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Professional {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Email: string;

    @Column()
    Phone_nbr: string;

    @Column()
    id_service: number;

    @Column()
    Password: string;

    @Column()
    PP_url: string;
}

export default Professional