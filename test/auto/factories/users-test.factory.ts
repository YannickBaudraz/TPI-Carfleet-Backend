/*
 * Description  :   This class create users dto for test
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - users-test.factory.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { UserDto } from '../../../src/carfleet/models/dtos';
import { UserRole, UserStatus } from '../../../src/carfleet/models/enums';
import { AbstractSerializableTestFactory } from './abstract-serializable-test.factory';
import { CompaniesTestFactory } from './companies-test.factory';

/**
 * This class creates users dto for test.
 */
export class UsersTestFactory extends AbstractSerializableTestFactory {
  /**
   * Create a full user dto.
   *
   * @return An user dto.
   */
  static createFullUserDto(): UserDto {
    const userDto = new UserDto();

    userDto.id = 1;
    userDto.firstname = 'Réjane';
    userDto.lastname = 'Zambon';
    userDto.email = 'azambon0@chron.com';
    userDto.role = UserRole.Admin;
    userDto.language = 'Georgian';
    userDto.status = UserStatus.Active;
    userDto.company = CompaniesTestFactory.createFullCompanyDto();

    return this.removeLeadingUnderscoreInFields(userDto) as UserDto;
  }

  /**
   * Create an user that not exists yet in the database.
   *
   * @return An user dto.
   */
  static createNonExistentUser(): UserDto {
    const userDto = new UserDto();

    userDto.firstname = 'Yannick';
    userDto.lastname = 'Baudraz';
    userDto.email = 'yannick.baudraz@cpnv.ch';
    userDto.role = UserRole.Donator;
    userDto.language = 'Français';
    userDto.status = UserStatus.Active;
    userDto.company = CompaniesTestFactory.createFullCompanyDto();

    return this.removeLeadingUnderscoreInFields(userDto) as UserDto;
  }
}
