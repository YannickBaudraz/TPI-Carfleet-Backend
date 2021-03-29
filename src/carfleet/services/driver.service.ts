/*
 * Description  :   Service for drivers.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - driver.service.ts
 *
 * Created      :   25.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { Service } from 'typedi';
import { getConnectionManager } from 'typeorm';
import { DatabaseConnector } from '../models/database';
import { DriverEntity } from '../models/database/entities';
import { DriverRepository } from '../models/database/repositories/driver.repository';
import { DriverDto } from '../models/dtos/driver.dto';
import { TransformationService } from './transformation.service';

/**
 * This class manages drivers.
 */
@Service()
export class DriverService {
  //region Fields
  private _driverRepository!: DriverRepository;
  private _databaseConnector: DatabaseConnector;
  //endregion

  //region Constructor
  /**
   * Create an instance of driver service.
   */
  constructor(private _transformationService: TransformationService) {
    this._databaseConnector = new DatabaseConnector(getConnectionManager());
    this._databaseConnector.connect(() => {
      const connection = this._databaseConnector.connection;
      this._driverRepository = connection.getCustomRepository(DriverRepository);
    });
  }
  //endregion

  //region Methods
  /**
   * Retrieve all drivers from the database.
   *
   * @return An array of {@link DriverDto} from the database
   */
  async getAll(): Promise<DriverDto[]> {
    await this._databaseConnector.connectionReadyToUse;

    const driverEntities: DriverEntity[] = await this._driverRepository.find();

    return this._transformationService.entitiesToDtos(driverEntities, DriverDto) as DriverDto[];
  }

  /**
   * Retrieve a vehicle from the database.
   *
   * @param id - The unique identifier
   *
   * @return The dto driver or undefined if it was not found
   */
  async getById(id: number): Promise<DriverDto | undefined> {
    await this._databaseConnector.connectionReadyToUse;

    const driverEntity: DriverEntity | undefined = await this._driverRepository.findOne(id);

    return driverEntity ? (this._transformationService.entityToDto(driverEntity, DriverDto) as DriverDto) : undefined;
  }
  //endregion
}
