/*
 * Description  :   This class create drivers dto for test
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - drivers.factory.test.ts
 *
 * Created      :   23.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { DriverDto } from '../../../src/carfleet/models/dtos/driver.dto';
import { AbstractSerializableTestFactory } from './abstract-serializable-test.factory';
import { CompaniesTestFactory } from './companies-test.factory';

/**
 * This class create driver dto for test.
 */
export class DriversTestFactory extends AbstractSerializableTestFactory {
  /**
   * Create a full driver dto.
   *
   * @return A driver dto.
   */
  static createFullDriverDto(): DriverDto {
    const driverDto: DriverDto = new DriverDto();

    driverDto.id = 2;
    driverDto.gender = 'F';
    driverDto.firstname = 'Correna';
    driverDto.lastname = 'McKimmie';
    driverDto.jobTitle = 'Staff Scientist';
    driverDto.email = 'cmckimmie1@gravatar.com';
    driverDto.phoneNumber = '479-313-0570';
    driverDto.company = CompaniesTestFactory.createFullCompanyDto();

    return this.removeLeadingUnderscoreInFields(driverDto) as DriverDto;
  }
}
