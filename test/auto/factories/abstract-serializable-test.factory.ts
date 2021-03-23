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
export class AbstractSerializableTestFactory {
  protected static removeLeadingUnderscoreInFields(dto: AbstractSerializableDto): AbstractSerializableDto {
    const withoutUnderscoreInFields = dto.toJSON();
    return (withoutUnderscoreInFields as unknown) as AbstractSerializableDto;
  }
}