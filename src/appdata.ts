import {Connection, createConnection} from 'typeorm';
import {get} from 'env-var';
import { stringify } from 'querystring';
import { env } from './const_env';

export default async function DB(): Promise<Connection>{
    /*console.log(env('HOST').asString(), env('PORT').asPortNumber(),
    env('DB_PORT').asPortNumber(), env('DB_USER').asString(), env('DB_PASS').asString(), 
    env('DB_NAME').asString());*/
    return createConnection({
        type: "postgres",
        host: env('HOST').asString(),
        port: env('DB_PORT').asPortNumber(),
        username: env('DB_USER').asString(),
        password: env('DB_PASS').asString(),
        database: env('DB_NAME').asString(),
        entities: [
            __dirname + "/entities/*.ts"
        ],
        synchronize: true,
    }).then(connection => {
        console.log("Connected");
        return connection;
        // here you can start to work with your entities
    }).catch(error => {
        console.log(error);
        return process.exit(84);
    });
} 