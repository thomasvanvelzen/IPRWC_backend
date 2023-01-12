import { createConnections, DataSource, DataSourceOptions } from 'typeorm';

const defaultOptions: DataSourceOptions = {
    type: 'mysql',
    host: '45.32.235.25',
    port: 3306,
    username: 'wordpressuser',
    password: 'TinGietAims22!',
};
//

export const dataSource: DataSource = new DataSource({
    ...defaultOptions,
    database: 'pro10',
});

dataSource.initialize();
