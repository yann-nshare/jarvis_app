import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Client extends BaseEntity{
    /*constructor(username:string, password:string) {
        super();
        this.username = username;
        this.password = password;
    }*/

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    abonnement: boolean;

    @Column()
    email: string;
}

//export default Client