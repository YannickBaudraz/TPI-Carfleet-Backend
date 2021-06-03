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

import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { AbstractSerializableDto } from './abstract-serializable.dto';
import { DriverDto } from './driver.dto';
import { UserDto } from './user.dto';

/**
 * This class represent a data transfer object company.
 */
@Exclude()
export class CompanyDto extends AbstractSerializableDto {
  //region Fields
  private _name!: string;
  private _address!: string;
  private _zip!: string;
  private _city!: string;
  private _canton!: string;
  private _phone!: string;
  private _email!: string;
  private _websiteUrl!: string;
  private _color!: string;
  private _companiescol!: string;
  private _drivers!: DriverDto[];
  private _users!: UserDto[];
  //endregion

  //region Accessors
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
  @Transform(({ value }) => CompanyDto.convertBufferToHexColor((value as unknown) as Buffer), { toClassOnly: true })
  get color(): string {
    return this._color;
  }
  set color(value: string) {
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

  /**
   * Array of driver data transfer object.
   */
  @Type(() => DriverDto)
  @Expose({ name: '__drivers__' })
  get drivers(): DriverDto[] {
    return this._drivers;
  }
  set drivers(value: DriverDto[]) {
    this._drivers = value;
  }

  /**
   * Array of user data transfer object.
   */
  @Type(() => UserDto)
  @Expose({ name: '__users__' })
  get users(): UserDto[] {
    return this._users;
  }
  set users(value: UserDto[]) {
    this._users = value;
  }
  //endregion

  //region Methods
  /**
   * Return hex color from a buffer.
   *
   * @param buffer - The buffer ton convert
   *
   * @return The hex color code converted.
   */
  static convertBufferToHexColor(buffer: Buffer): string {
    const str = buffer.toString('hex');
    return str.indexOf('#') === -1 ? `#${str}` : str;
  }
  //endregion
}
