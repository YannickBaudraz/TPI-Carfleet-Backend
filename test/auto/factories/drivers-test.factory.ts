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
  static createDriverDto(): DriverDto {
    const driverDto: DriverDto = new DriverDto();

    driverDto.id = 1;
    driverDto.firstname = 'Silvain';
    driverDto.lastname = 'Lowder';
    driverDto.company = CompaniesTestFactory.createCompanyDto();

    return this.removeLeadingUnderscoreInFields(driverDto) as DriverDto;
  }
}
