import {DataSource} from 'typeorm';
import { DB_HOST, DB_NM, DB_PASSWORD, DB_PORT, DB_USER } from '../Config';

export const AppDataSource = new DataSource({
    type:'mysql',
    host:DB_HOST,
    port:Number(DB_PORT),
    username:DB_USER,
    password:DB_PASSWORD,
    database:DB_NM,
    synchronize:true,
    entities:[],
    migrations:[],
    subscribers:[]
})