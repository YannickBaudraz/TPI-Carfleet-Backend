/*
 * Description  :   Transform objects to others
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - TransformerService.ts
 *
 * Created      :   18.02.2021 : Created with :
 *                    - jsonToCar
 *                    - jsonArrayToCars
 *
 * Updates      :   05.03.2021
 *                      Use database instead of JSON file :
 *                        Delete :
 *                          - jsonToCar
 *                          - jsonArrayToCars
 *                        Add :
 *                          - vehicleEntityToDto
 *                          - vehicleEntitiesToDtos
 *                          - vehicleDtoToEntity
 *
 * Created with WebStorm.
 */

import { classToPlainFromExist, plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import { VehiclesEntity } from '../database/entities';
import { VehicleDto } from '../dtos';

/**
 * This class is designed to transform an object to another.
 */
@Service()
export class TransformationService {
  /**
   * Transform a {@link VehiclesEntity} to a {@link VehicleDto}.
   *
   * @param vehicleEntity - The {@link VehiclesEntity} to transform
   *
   * @return The instance of {@link VehicleDto}
   */
  vehicleEntityToDto(vehicleEntity: VehiclesEntity): VehicleDto {
    return plainToClass(VehicleDto, vehicleEntity);
  }

  /**
   * Transform an array of {@link VehiclesEntity} to an array of {@link VehicleDto}.
   *
   * @param vehicleEntities - {@link VehiclesEntity} to transform
   *
   * @return The array of {@link VehicleDto}
   */
  vehicleEntitiesToDtos(vehicleEntities: VehiclesEntity[]): VehicleDto[] {
    return plainToClass(VehicleDto, vehicleEntities);
  }

  /**
   * Transform a {@link VehicleDto} to a {@link VehiclesEntity}.
   *
   * @param vehicleDto - The {@link VehicleDto} to transform.
   *
   * @return The instance of {@link VehiclesEntity}
   */
  vehicleDtoToEntity(vehicleDto: VehicleDto): VehiclesEntity {
    return classToPlainFromExist(vehicleDto, VehiclesEntity) as VehiclesEntity;
  }
}
