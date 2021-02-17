/*
 * Description  :   [ADD DESCRIPTION]
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

import { Serializable, serialize } from 'typescript-json-serializer';
import { StringUtils } from '../../../lib/utils/StringUtils';

/**
 * This abstract class enhanced the way to be serializable.
 */
@Serializable({
  formatPropertyNames: StringUtils.removeLeadingUnderscore,
})
export abstract class SerializableDto {
  /**
   * Serialize the instantiated object with the serializable options.
   *
   * @return The object serialized
   */
  toJSON(): string {
    return serialize(this);
  }
}
