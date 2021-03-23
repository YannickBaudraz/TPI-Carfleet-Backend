import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnection } from 'typeorm';
import { BooleanUtils } from '../../../lib/utils';
import { CompaniesEntity, DriversEntity, VehiclesEntity } from './entities';

/**
 * This class helps to manage database connections.
 */
export class DatabaseConnector {
  private _connectionManager: ConnectionManager;
  private _connection!: Connection;

  /**
   * Create an instance with a connection manager.
   */
  constructor(_connectionManager: ConnectionManager) {
    this._connectionManager = _connectionManager;
  }

  /**
   * Get the connection options of the database.
   *
   * @return The connection options
   */
  static getConnectionOptions(): ConnectionOptions {
    return {
      name: process.env.DB_CONNECTION_NAME,
      type: process.env.DB_TYPE as 'mariadb' | 'mysql' | 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [CompaniesEntity, DriversEntity, VehiclesEntity],
      logging: BooleanUtils.stringToBoolean(process.env.DB_LOGGING as string),
    };
  }

  /**
   * Create a TypePrm connection depended by the NODE_ENV variable.
   */
  async createTypeOrmConnection(): Promise<void> {
    if (!this.isConnectionExists()) {
      const connectionOptions = DatabaseConnector.getConnectionOptions();
      await createConnection(connectionOptions);
    }
  }

  /**
   * Get the connection related to the environment.
   *
   * @return Always returns the single one connection
   */
  getConnection(): Connection {
    if (this.isConnectionExists()) {
      this._connection = getConnection(process.env.DB_CONNECTION_NAME as string);
    }

    return this._connection;
  }

  private isConnectionExists(): boolean {
    return this._connectionManager.has(process.env.DB_CONNECTION_NAME as string);
  }
}
