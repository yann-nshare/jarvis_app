import {get} from 'env-var';

export const env = (name: string, required = true) => get(name).required(required);
