/*
 * Description  :   Transform objects to anothers
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - TransformerService.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { plainToClass } from 'class-transformer';
import { CarDto } from '../dto/CarDto';
import { LiteralObject } from '../types/LiteralObject';

/**
 * This class is designed to transform an object to another.
 */
export class TransformationService {
  /**
   * Transform a JSON object to a {@link CarDto}.
   *
   * @param json - The JSON to transform
   *
   * @return {CarDto} - The instance of {@link CarDto}
   */
  jsonToCar(json: LiteralObject): CarDto {
    return plainToClass(CarDto, json);
  }
}
