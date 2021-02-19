/*
 * Description  :   Abstract class to serialize object to JSON.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - ModelBase.ts
 *
 * Created      :   17.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { classToPlain } from 'class-transformer';
import { StringUtils } from '../../../lib/utils/StringUtils';
import { LiteralJSONObject } from '../types/LiteralJSONObject';

/**
 * This abstract class enhanced the way to be serializable.
 */
export abstract class SerializableDto {
  // noinspection JSUnusedGlobalSymbols
  /**
   * Serialize the instantiated object with the serializable options.
   *
   * @return The object serialized
   */
  toJSON(): LiteralJSONObject {
    return classToPlain(this);
  }

  /**
   * Transform the property and remove the leading underscore (private fields).
   *
   * @param property - The property to transform
   *
   * @return The property transformed
   */
  protected static transformProperty(property: string): string {
    return StringUtils.removeLeadingUnderscore(property);
  }
}