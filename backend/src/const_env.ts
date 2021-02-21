import { from, logger } from "env-var"
import { config } from "dotenv"

config()

const debugged = from(process.env, {}, logger)
export const env = (name: string, required = true) => debugged.get(name).required(required)

//const env = (name: string, required = true) => get(name).required(required);

export const ENV_NAME = env('ENV_NAME').asString()
export const PORT = env('PORT').asPortNumber()
export const TYPE = env('TYPE').asString()
export const DB_NAME = env('DB_NAME').asString()
export const DB_USER = env('DB_USER').asString()
export const DB_PASS = env('DB_PASS').asString()
export const DB_PORT = env('DB_PORT').asPortNumber()
export const HOST = env('HOST').asString()