/*
 * Description  :   Data Transfer Object for users.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user.dto.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { UserRole, UserStatus } from '../enums';
import { AbstractSerializableDto } from './abstract-serializable.dto';
import { CompanyDto } from './company.dto';

/**
 * This class represent a data transfer object user.
 */
export class UserDto extends AbstractSerializableDto {
  //region Fields
  private _firstname!: string;
  private _lastname!: string;
  private _email!: string;
  private _role!: UserRole;
  private _language!: string;
  private _status!: UserStatus;
  private _company!: CompanyDto;
  //endregion

  /**
   * Firstname.
   */
  get firstname(): string {
    return this._firstname;
  }
  set firstname(value: string) {
    this._firstname = value;
  }

  /**
   * Lastname.
   */
  get lastname(): string {
    return this._lastname;
  }
  set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Email address.
   */
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  /**
   * User role.
   */
  get role(): UserRole {
    return this._role;
  }
  set role(value: UserRole) {
    this._role = value;
  }

  /**
   * Language.
   */
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }

  /**
   * User status.
   */
  get status(): UserStatus {
    return this._status;
  }
  set status(value: UserStatus) {
    this._status = value;
  }

  /**
   * Company data transfer object.
   */
  get company(): CompanyDto {
    return this._company;
  }
  set company(value: CompanyDto) {
    this._company = value;
  }
}
