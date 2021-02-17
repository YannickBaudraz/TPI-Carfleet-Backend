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

import { JsonProperty } from 'typescript-json-serializer';
import { SerializableDto } from './SerializableDto';

/**
 * This class represents a car.
 */
export class CarDto extends SerializableDto {
  // region Fields

  @JsonProperty()
  private _id?: number;

  @JsonProperty()
  private readonly _registrationNumber!: string;

  @JsonProperty()
  private readonly _chassisNumber!: string;

  // endregion

  // region Constructor

  /**
   * Instantiate the class.
   *
   * @param id - The unique id
   * @param registrationNumber - The unique registration plate
   * @param chassisNumber - The unique VIN code
   */
  constructor(id: number, registrationNumber: string, chassisNumber: string) {
    super();

    this._id = id;
    this._registrationNumber = registrationNumber;
    this._chassisNumber = chassisNumber;
  }

  // endregion

  // region Accessors

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get registrationNumber(): string {
    return this._registrationNumber;
  }

  get chassisNumber(): string {
    return this._chassisNumber;
  }

  // endregion
}
