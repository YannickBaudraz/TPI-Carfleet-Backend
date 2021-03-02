/*
 * Description  :   This file represents a vehicle model
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - vehicle.dto.ts
 *
 * Created      :   12.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Exclude, Expose } from 'class-transformer';
import { SerializableDto } from './serializable.dto';

// noinspection JSUnusedGlobalSymbols
@Exclude()
/**
 * This class represents a vehicle.
 */
export class VehicleDto extends SerializableDto {
  // region Fields

  private _id!: number;
  private _licensePlate!: string;
  private _manufacturer!: string;
  private _model!: string;
  private _vin!: string;
  private _exteriorColor!: string;
  private _registration!: string;
  private _type!: string;
  private _introduction!: Date;

  // endregion

  // region Constructor

  constructor() {
    super();
  }

  // endregion

  //region Accessors

  @Exclude()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  @Expose()
  get licensePlate(): string {
    return this._licensePlate;
  }

  set licensePlate(value: string) {
    this._licensePlate = value;
  }

  @Expose()
  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  @Expose()
  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  @Expose()
  get vin(): string {
    return this._vin;
  }

  set vin(value: string) {
    this._vin = value;
  }

  @Expose()
  get exteriorColor(): string {
    return this._exteriorColor;
  }

  set exteriorColor(value: string) {
    this._exteriorColor = value;
  }

  @Expose()
  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  @Expose()
  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  @Expose()
  get introduction(): Date {
    return this._introduction;
  }

  set introduction(value: Date) {
    this._introduction = value;
  }

  //endregion
}
