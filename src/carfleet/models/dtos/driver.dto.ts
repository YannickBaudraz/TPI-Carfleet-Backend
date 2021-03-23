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
  private _id!: number;
  private _firstname!: string;
  private _lastname!: string;
  private _company!: CompanyDto;

  /**
   * Create an instance of an dto driver.
   */
  constructor() {
    super();
  }

  /**
   * Unique ID row number.
   */
  @Expose()
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

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
}
