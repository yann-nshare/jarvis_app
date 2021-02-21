import { Connection, createConnection } from 'typeorm';
import { stringify } from 'querystring';
import {DB_NAME, DB_PORT, DB_PASS, DB_USER, HOST} from './const_env';

//Connect to database
export default async function DB(): Promise<Connection> {
    /*console.log(env('HOST').asString(), env('PORT').asPortNumber(),
    env('DB_PORT').asPortNumber(), env('DB_USER').asString(), env('DB_PASS').asString(), 
    env('DB_NAME').asString());*/
    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "admin",
        password: "123",
        database: "jarvis_database",
        entities: [
            __dirname + "/entities/*.ts"
        ],
        synchronize: true,
    }).then(connection => {
        console.log("Connected to database");
        return connection;
        // here you can start to work with your entities
    }).catch(error => {
        console.log(error);
        return process.exit(84);
    });
}