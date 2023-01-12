import { createConnections, DataSource, DataSourceOptions } from 'typeorm';

const defaultOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'mysql-3de73fdc-thovv83-f6ea.aivencloud.com',
    port: 10700,
    username: 'avnadmin',
    password: 'AVNS_4NDX-EI9M2WthKyv2kh',
};
//

export const dataSource: DataSource = new DataSource({
    ...defaultOptions,
    database: 'defaultdb',
});

dataSource.initialize();
