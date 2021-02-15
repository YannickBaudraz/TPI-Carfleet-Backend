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

/**
 * This class represents a car.
 */
export class Car {
  // region Fields

  private _id?: number;
  private readonly _registrationNumber: string;
  private readonly _chassisNumber: number;
  // endregion

  // region Constructor

  constructor(id: number, registrationNumber: string, chassisNumber: number) {
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

  get chassisNumber(): number {
    return this._chassisNumber;
  }

  // endregion
}
