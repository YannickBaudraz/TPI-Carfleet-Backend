/*
 * Description  :   Connector of the database.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - vehicle.service.ts
 *
 * Created      :   05.03.2021 - Create with :
 *                    - getAllFromDb
 *                    - getOneFromDb
 *                    - createOneInDb
 *                    - updateOneInDb
 *                    - deleteOneInDb
 *
 * Updates      :   25.03.2021
 *                      Telling with a promise when the connection is ready to use.
 *
 * Created with WebStorm.
 */

import { Connection, ConnectionManager, ConnectionOptions, createConnection, getConnection } from 'typeorm';
import { BooleanUtils } from '../../../lib/utils';
import { CompaniesEntity, DriversEntity, VehiclesEntity } from './entities';

/**
 * This class helps to manage database connection.
 */
export class DatabaseConnector {
  //region Fields
  private _connectionManager: ConnectionManager;
  private _connection!: Connection;
  private _connectionReadyToUse!: Promise<undefined>;
  //endregion

  //region Constructor
  /**
   * Create an instance with a connection manager.
   */
  constructor(_connectionManager: ConnectionManager) {
    this._connectionManager = _connectionManager;
  }
  //endregion

  //region Accessors
  /**
   * Get the connection related to the environment.
   *
   * @return Always returns the single one connection.
   */
  get connection(): Connection {
    if (this.isConnectionExists()) {
      this._connection = getConnection(process.env.DB_CONNECTION_NAME as string);
    }

    return this._connection;
  }

  /**
   * Telling when the connection is ready to use.
   */
  get connectionReadyToUse(): Promise<undefined> {
    return this._connectionReadyToUse;
  }
  //endregion

  //region Methods
  //region Static methods
  private static getConnectionOptions(): ConnectionOptions {
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
  //endregion

  //region Public methods
  /**
   * Create a TypeOrm connection depended by the NODE_ENV variable.
   *
   * @return Promise to tell when connection is ready to use.
   */
  connect(resolvedCallback: () => void): void {
    this._connectionReadyToUse = new Promise<undefined>((resolve, reject) => {
      this.createTypeOrmConnection()
        .then(() => {
          resolvedCallback();
          resolve(undefined);
        })
        .catch(() => reject());
    });
  }
  //endregion

  //region Private methods
  private async createTypeOrmConnection(): Promise<void> {
    if (!this.isConnectionExists()) {
      const connectionOptions = DatabaseConnector.getConnectionOptions();
      await createConnection(connectionOptions);
    }
  }

  private isConnectionExists(): boolean {
    return this._connectionManager.has(process.env.DB_CONNECTION_NAME as string);
  }
  //endregion
  //endregion
}
