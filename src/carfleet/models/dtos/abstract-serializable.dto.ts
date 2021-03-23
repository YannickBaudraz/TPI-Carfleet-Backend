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
import { LiteralObject } from '../../../lib/types/literal-object';
import { ObjectUtils } from '../../../lib/utils';

/**
 * This abstract class enhanced the way to be serializable.
 */
export abstract class AbstractSerializableDto {
  //region Protected constructor
  protected constructor() {}
  //endregion

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
