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
import { LiteralJsonObject } from '../../../lib/types/literal-json-object';

/**
 * This abstract class enhanced the way to be serializable.
 */
export abstract class SerializableDto {
  protected constructor() {}

  // noinspection JSUnusedGlobalSymbols
  /**
   * Serialize the instantiated object with the serializable options.
   *
   * @return The object serialized
   */
  toJSON(): LiteralJsonObject {
    this.undefinedNulls(this);

    return classToPlain(this, { exposeUnsetFields: false });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private undefinedNulls(obj: any): any {
    if (obj === null) {
      return undefined;
    }
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = this.undefinedNulls(obj[key]);
        }
      }
    }
    return obj;
  }
}
