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

import { classToPlain, Expose } from 'class-transformer';
import { LiteralObject } from '../../../lib/types/literal-object';
import { ObjectUtils } from '../../../lib/utils';

/**
 * This abstract class enhanced the way to be serializable.
 */
export abstract class AbstractSerializableDto {
  protected _id!: number;

  /**
   * Unique ID row number.
   */
  @Expose()
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  //region Methods
  // noinspection JSUnusedGlobalSymbols
  /**
   * Serialize the instantiated object with the serializable options.
   *
   * @return The object serialized
   */
  toJSON(): LiteralObject {
    ObjectUtils.nullToUndefinedProperties(this);

    return classToPlain(this);
  }
  //endregion
}
