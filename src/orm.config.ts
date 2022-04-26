import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

// parse the .env file for the database connection
const db_host = process.env.POSTGRES_HOST || 'localhost';
const db_port = parseInt(process.env.POSTGRES_PORT) || 5432;
const conn_db = process.env.POSTGRES_DB || 'postgres';
const sync_db = process.env.SYNC_DB == 'true' || false;
const db_user = process.env.POSTGRES_USER || 'postgres';
const db_password = process.env.POSTGRES_PASSWORD || 'postgres';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: db_user,
    password: db_password,
    port: db_port,
    host: db_host,
    database: conn_db,
    synchronize: sync_db,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
