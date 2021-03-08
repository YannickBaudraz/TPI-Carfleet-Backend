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
import { VehicleDto } from '../dtos';
import { VehicleEntity } from '../entities';

/**
 * This class is designed to transform an object to another.
 */
export class TransformationService {
  /**
   * Transform a {@link VehicleEntity} to a {@link VehicleDto}.
   *
   * @param vehicleEntity - The {@link VehicleEntity} to transform
   *
   * @return The instance of {@link VehicleDto}
   */
  vehicleEntityToDto(vehicleEntity: VehicleEntity): VehicleDto {
    return plainToClass(VehicleDto, vehicleEntity);
  }

  /**
   * Transform an array of {@link VehicleEntity} to an array of {@link VehicleDto}.
   *
   * @param vehicleEntities - {@link VehicleEntity} to transform
   *
   * @return The array of {@link VehicleDto}
   */
  vehicleEntitiesToDtos(vehicleEntities: VehicleEntity[]): VehicleDto[] {
    return plainToClass(VehicleDto, vehicleEntities);
  }

  /**
   * Transform a {@link VehicleDto} to a {@link VehicleEntity}.
   *
   * @param vehicleDto - The {@link VehicleDto} to transform.
   *
   * @return The instance of {@link VehicleEntity}
   */
  vehicleDtoToEntity(vehicleDto: VehicleDto): VehicleEntity {
    return classToPlainFromExist(vehicleDto, VehicleEntity) as VehicleEntity;
  }
}
