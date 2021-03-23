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
  private _id!: number;
  private _name!: string;

  /**
   * Create an instance of an dto company.
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
   * Name.
   */
  @Expose()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}
