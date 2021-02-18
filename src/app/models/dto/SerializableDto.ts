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

import { serialize } from 'class-transformer';

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
  toJSON(): string {
    return serialize(this);
  }
}
