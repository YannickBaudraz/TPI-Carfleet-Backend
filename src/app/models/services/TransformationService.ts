/*
 * Description  :   Transform objects to others
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
import { CarDto } from '../dtos/CarDto';
import { LiteralJSONObject } from '../types/LiteralJSONObject';

/**
 * This class is designed to transform an object to another.
 */
export class TransformationService {
  /**
   * Transform a JSON object to a {@link CarDto}.
   *
   * @param json - The JSON to transform
   *
   * @return The instance of {@link CarDto}
   */
  jsonToCar(json: LiteralJSONObject): CarDto {
    return plainToClass(CarDto, json);
  }

  /**
   * Transform an array of JSON object to an array of {@link CarDto}.
   *
   * @param jsonArray - The Json array to transform
   *
   * @return The array of {@link CarDto}
   */
  jsonArrayToCars(jsonArray: LiteralJSONObject[]): CarDto[] {
    return plainToClass(CarDto, jsonArray);
  }
}