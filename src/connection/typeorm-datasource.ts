import { createConnections, DataSource, DataSourceOptions } from 'typeorm';

const defaultOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
};
//

export const dataSource: DataSource = new DataSource({
    ...defaultOptions,
    database: 'webshop',
});

dataSource.initialize();
