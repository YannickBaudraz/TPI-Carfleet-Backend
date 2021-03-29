/*
 * Description  :   [ADD DESCRIPTION]
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - abstract-serializable-test.dto.factory.ts
 *
 * Created      :   23.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { AbstractSerializableDto } from '../../../src/carfleet/models/dtos/abstract-serializable.dto';

/**
 * Factory for serializable dto in tests.
 */
export abstract class AbstractSerializableTestFactory {
  protected static removeLeadingUnderscoreInFields(dto: AbstractSerializableDto): AbstractSerializableDto {
    return (dto.toJSON() as unknown) as AbstractSerializableDto;
  }
}
