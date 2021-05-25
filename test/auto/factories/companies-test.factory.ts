/*
 * Description  :   This class create company dto for test.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - VehicleDtoHelper.ts
 *
 * Created      :   23.03.2021
 *
 * Updates      :   07.05.2021
 *                      Add fields to get a full company dto.
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
  static createFullCompanyDto(): CompanyDto {
    const companyDto = new CompanyDto();

    companyDto.id = 1;
    companyDto.name = 'Voonder';
    companyDto.address = '3668 Graceland Plaza';
    companyDto.zip = '1209';
    companyDto.city = 'Genève';
    companyDto.canton = 'Genève';
    companyDto.phone = '210-211-8599';
    companyDto.email = 'ecleary0@altervista.org';
    companyDto.websiteUrl = 'http://ox.ac.uk';
    companyDto.color = '#5b5bff';
    companyDto.companiescol = 'sap';

    return this.removeLeadingUnderscoreInFields(companyDto) as CompanyDto;
  }
}
