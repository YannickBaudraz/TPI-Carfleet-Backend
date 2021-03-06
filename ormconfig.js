const entitiesPath = process.env.TS_NODE_DEV
  ? 'src/app/models/entities/*.entity.ts'
  : 'dist/app/models/entities/*.entity.js';

module.exports = {
  name: 'default',
  type: 'mariadb',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '11091993',
  database: 'car_fleet',
  synchronize: false,
  entities: [entitiesPath],
};
