/*
 * Description  :   Data transfer object for companies.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - company.dto.ts
 *
 * Created      :   22.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { Exclude, Expose } from 'class-transformer';
import { AbstractSerializableDto } from './abstract-serializable.dto';

/**
 * This class represent a data transfer object company.
 */
@Exclude()
export class CompanyDto extends AbstractSerializableDto {
  private _name!: string;
  private _address!: string;
  private _zip!: string;
  private _city!: string;
  private _canton!: string;
  private _phone!: string;
  private _email!: string;
  private _websiteUrl!: string;
  private _color!: number;
  private _companiescol!: string;

  /**
   * Name.
   */
  @Expose()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Street address with street number.
   */
  @Expose()
  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }

  /**
   * Zip code.
   */
  @Expose()
  get zip(): string {
    return this._zip;
  }
  set zip(value: string) {
    this._zip = value;
  }

  /**
   * Name of the city.
   */
  @Expose()
  get city(): string {
    return this._city;
  }
  set city(value: string) {
    this._city = value;
  }

  /**
   * Name of the canton.
   */
  @Expose()
  get canton(): string {
    return this._canton;
  }
  set canton(value: string) {
    this._canton = value;
  }

  /**
   * Phone number.
   */
  @Expose()
  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }

  /**
   * Email address.
   */
  @Expose()
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  /**
   * Url of the website.
   */
  @Expose()
  get websiteUrl(): string {
    return this._websiteUrl;
  }
  set websiteUrl(value: string) {
    this._websiteUrl = value;
  }

  /**
   * Color in hexadecimal.
   */
  @Expose()
  get color(): number {
    return this._color;
  }
  set color(value: number) {
    this._color = value;
  }

  /**
   * Companies col.
   */
  @Expose()
  get companiescol(): string {
    return this._companiescol;
  }
  set companiescol(value: string) {
    this._companiescol = value;
  }
}
