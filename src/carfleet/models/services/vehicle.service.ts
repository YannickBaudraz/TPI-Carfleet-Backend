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

import { DeleteResult, getRepository, InsertResult, Repository, UpdateResult } from 'typeorm';
import { VehicleDto } from '../dtos';
import { VehicleEntity } from '../entities';
import { TransformationService } from './transformation.service';

/**
 * This class manages vehicles.
 */
export class VehicleService {
  //region Fields
  private readonly _vehicleRepository: Repository<VehicleEntity>;
  private readonly _transformationService: TransformationService;
  //endregion

  //region Constructor
  /**
   * Create an instance of vehicles service.
   *
   * @param transformationService - A carfleet transformation service
   */
  constructor(transformationService: TransformationService) {
    this._vehicleRepository = getRepository(VehicleEntity);
    this._transformationService = transformationService;
  }
  //endregion

  //region Methods
  /**
   * Retrieve all vehicles from the database.
   *
   * @return An array of {@link VehicleDto}
   */
  async getAllFromDb(): Promise<VehicleDto[]> {
    const vehicleEntities: VehicleEntity[] = await this._vehicleRepository.find();

    return this._transformationService.vehicleEntitiesToDtos(vehicleEntities);
  }

  /**
   * Retrieve a vehicle from the database.
   *
   * @param id - The unique identifier
   *
   * @return The dto vehicle or undefined if it was not found
   */
  async getOneFromDb(id: number): Promise<VehicleDto | undefined> {
    const vehicleEntity: VehicleEntity | undefined = await this._vehicleRepository.findOne(id);

    return vehicleEntity ? this._transformationService.vehicleEntityToDto(vehicleEntity) : undefined;
  }

  /**
   * Insert a vehicle to the database.
   *
   * @param vehicleDto - The dto object
   *
   * @return The dto object with the insert id if success, otherwise it fails
   */
  async createOneInDb(vehicleDto: VehicleDto): Promise<VehicleDto> {
    const vehicleEntity = this._transformationService.vehicleDtoToEntity(vehicleDto);
    await this._vehicleRepository.insert(vehicleEntity).then((value: InsertResult) => {
      vehicleEntity.id = (value.identifiers[0] as VehicleEntity).id;
    });

    return this._transformationService.vehicleEntityToDto(vehicleEntity);
  }

  /**
   * Update a vehicle to the database.
   *
   * @param vehicleDto - The dto vehicle
   *
   * @return The update result
   */
  async updateOneInDb(vehicleDto: VehicleDto): Promise<UpdateResult> {
    const primaryKeys = {
      id: vehicleDto.id,
      driverId: vehicleDto.driverId,
      driverCompanyId: vehicleDto.driverCompanyId,
    };

    return await this._vehicleRepository.update(
      primaryKeys,
      this._transformationService.vehicleDtoToEntity(vehicleDto)
    );
  }

  /**
   * Update a vehicle to the database.
   *
   * @param id - The dto vehicle
   *
   * @return The delete result
   */
  async deleteOneInDb(id: number): Promise<DeleteResult> {
    return await this._vehicleRepository.delete(id);
  }
  //endregion
}
