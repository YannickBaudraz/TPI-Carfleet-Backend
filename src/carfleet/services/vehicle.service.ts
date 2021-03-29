/*
 * Description  :   Service for vehicles
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
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Service } from 'typedi';
import { DeleteResult, getConnectionManager, InsertResult, UpdateResult } from 'typeorm';
import { DatabaseConnector } from '../models/database';
import { VehicleEntity } from '../models/database/entities';
import { VehicleRepository } from '../models/database/repositories';
import { VehicleDto } from '../models/dtos';
import { TransformationService } from './transformation.service';

/**
 * This class manages vehicles.
 */
@Service()
export class VehicleService {
  //region Fields
  private _vehicleRepository!: VehicleRepository;
  private _databaseConnector: DatabaseConnector;
  //endregion

  //region Constructor
  /**
   * Create an instance of vehicle service.
   *
   * @param _transformationService - A carfleet transformation service
   */
  constructor(private _transformationService: TransformationService) {
    this._databaseConnector = new DatabaseConnector(getConnectionManager());
    this._databaseConnector.connect(() => {
      const connection = this._databaseConnector.connection;
      this._vehicleRepository = connection.getCustomRepository(VehicleRepository);
    });
  }
  //endregion

  //region Methods
  /**
   * Retrieve all vehicles from the database.
   *
   * @return An array of {@link VehicleDto}
   */
  async getAll(): Promise<VehicleDto[]> {
    await this._databaseConnector.connectionReadyToUse;

    const vehicleEntities: VehicleEntity[] = await this._vehicleRepository.find();

    return this._transformationService.entitiesToDtos(vehicleEntities, VehicleDto) as VehicleDto[];
  }

  /**
   * Retrieve a vehicle from the database.
   *
   * @param id - The unique identifier
   *
   * @return The dto vehicle or undefined if it was not found
   */
  async getById(id: number): Promise<VehicleDto | undefined> {
    await this._databaseConnector.connectionReadyToUse;

    const vehicleEntity: VehicleEntity | undefined = await this._vehicleRepository.findOne(id);

    return vehicleEntity
      ? (this._transformationService.entityToDto(vehicleEntity, VehicleDto) as VehicleDto)
      : undefined;
  }

  /**
   * Insert a vehicle to the database.
   *
   * @param vehicleDto - The dto object
   *
   * @return The dto object with the insert id if success, otherwise it fails
   */
  async create(vehicleDto: VehicleDto): Promise<VehicleDto> {
    const vehicleEntity = this._transformationService.dtoToEntity(vehicleDto, VehicleEntity) as VehicleEntity;

    await this._databaseConnector.connectionReadyToUse;

    await this._vehicleRepository.insert(vehicleEntity).then((value: InsertResult) => {
      vehicleEntity.id = (value.identifiers[0] as VehicleEntity).id;
    });

    return this._transformationService.entityToDto(vehicleEntity, VehicleDto) as VehicleDto;
  }

  /**
   * Update a vehicle to the database.
   *
   * @param vehicleDto - The dto vehicle
   *
   * @return The update result
   */
  async update(vehicleDto: VehicleDto): Promise<UpdateResult> {
    await this._databaseConnector.connectionReadyToUse;

    return await this._vehicleRepository.update(
      vehicleDto.id,
      this._transformationService.dtoToEntity(vehicleDto, VehicleEntity)
    );
  }

  /**
   * Update a vehicle to the database.
   *
   * @param id - The dto vehicle
   *
   * @return The delete result
   */
  async deleteById(id: number): Promise<DeleteResult> {
    await this._databaseConnector.connectionReadyToUse;

    return await this._vehicleRepository.delete(id);
  }
  //endregion
}
