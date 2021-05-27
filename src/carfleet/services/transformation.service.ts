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

import { ClassConstructor, plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import { ObjectUtils } from '../../lib/utils';
import { CarFleetEntity } from '../models/database/entities';
import { AbstractSerializableDto } from '../models/dtos';

/**
 * This class is designed to transform an object to another.
 */
@Service()
export class TransformationService {
  /**
   * Transform an entity to a dto.
   *
   * @param entity - The entity object existing
   * @param dtoClass - The dto class wanted
   *
   * @return The dto transformed from the entity
   */
  entityToDto(entity: CarFleetEntity, dtoClass: ClassConstructor<AbstractSerializableDto>): AbstractSerializableDto {
    return plainToClass(dtoClass, entity);
  }

  /**
   * Transform an array of entities to an array of dtos.
   *
   * @param entities - Entity objects existing
   * @param dtoClass - The dto class wanted
   *
   * @return Dtos transformed from entities
   */
  entitiesToDtos(
    entities: CarFleetEntity[],
    dtoClass: ClassConstructor<AbstractSerializableDto>
  ): AbstractSerializableDto[] {
    return plainToClass(dtoClass, entities);
  }

  /**
   * Transform a dto to an entity.
   *
   * @param dto - The dto object existing
   * @param entityClass - The entity class wanted
   *
   * @return The entity transformed from the dto
   */
  dtoToEntity(dto: AbstractSerializableDto, entityClass: ClassConstructor<CarFleetEntity>): CarFleetEntity {
    const plain = ObjectUtils.blankStringToNullProperties(dto.toJSON());
    return plainToClass(entityClass, plain);
  }
}
