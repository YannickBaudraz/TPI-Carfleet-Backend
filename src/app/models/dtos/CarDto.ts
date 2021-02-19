/*
 * Description  :   This file represents a car model
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - Car.ts
 *
 * Created      :   12.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Exclude, Expose } from 'class-transformer';
import { SerializableDto } from './SerializableDto';

// noinspection JSUnusedGlobalSymbols
@Exclude()
/**
 * This class represents a car.
 */
export class CarDto extends SerializableDto {
  // region Fields

  private _id!: number;
  private _registrationNumber!: string;
  private _chassisNumber!: string;

  // endregion

  // region Constructor

  /**
   * Instantiate a {@link CarDto}.
   */
  constructor() {
    super();
  }

  // endregion

  //region Accessors

  @Expose()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  @Expose()
  get registrationNumber(): string {
    return this._registrationNumber;
  }

  set registrationNumber(value: string) {
    this._registrationNumber = value;
  }

  @Expose()
  get chassisNumber(): string {
    return this._chassisNumber;
  }

  set chassisNumber(value: string) {
    this._chassisNumber = value;
  }

  //endregion
}
