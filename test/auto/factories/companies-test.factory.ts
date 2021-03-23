/*
 * Description  :   This class create company dto for test.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - VehicleDtoHelper.ts
 *
 * Created      :   23.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { CompanyDto } from '../../../src/carfleet/models/dtos/company.dto';
import { AbstractSerializableTestFactory } from './abstract-serializable-test.factory';

/**
 * This class create company dto for test.
 */
export class CompaniesTestFactory extends AbstractSerializableTestFactory {
  /**
   * Create a full company dto.
   *
   * @return A company dto.
   */
  static createCompanyDto(): CompanyDto {
    const companyDto = new CompanyDto();

    companyDto.id = 1;
    companyDto.name = 'Voonder';

    return this.removeLeadingUnderscoreInFields(companyDto) as CompanyDto;
  }
}
