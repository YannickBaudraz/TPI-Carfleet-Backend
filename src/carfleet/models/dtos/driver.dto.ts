/*
 * Description  :   Data Transfer Object for drivers.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - driver.dto.ts
 *
 * Created      :   22.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { Exclude, Expose, Type } from 'class-transformer';
import { AbstractSerializableDto } from './abstract-serializable.dto';
import { CompanyDto } from './company.dto';

/**
 * This class represent a data transfer object driver.
 */
@Exclude()
export class DriverDto extends AbstractSerializableDto {
  //region Fields
  private _firstname!: string;
  private _lastname!: string;
  private _company!: CompanyDto;
  private _gender!: string;
  private _jobTitle!: string;
  private _email!: string;
  private _phoneNumber!: string;
  //endregion

  //region Accessors
  /**
   * Firstname.
   */
  @Expose()
  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }
  /**
   * Lastname.
   */
  @Expose()
  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Gender.
   */
  @Expose()
  get gender(): string {
    return this._gender;
  }
  set gender(value: string) {
    this._gender = value;
  }

  /**
   * Job title.
   */
  @Expose()
  get jobTitle(): string {
    return this._jobTitle;
  }
  set jobTitle(value: string) {
    this._jobTitle = value;
  }

  /**
   * Email.
   */
  @Expose()
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  /**
   * Phone number.
   */
  @Expose()
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  /**
   * Company object.
   */
  @Type(() => CompanyDto)
  @Expose()
  get company(): CompanyDto {
    return this._company;
  }
  set company(value: CompanyDto) {
    this._company = value;
  }
  //endregion
}
