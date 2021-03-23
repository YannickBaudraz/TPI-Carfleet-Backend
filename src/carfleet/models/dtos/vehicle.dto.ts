/*
 * Description  :   Data Transfer Object for vehicles.
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

import { Exclude, Expose, Type } from 'class-transformer';
import { AbstractSerializableDto } from './abstract-serializable.dto';
import { DriverDto } from './driver.dto';

/**
 * This class represent a data transfer object vehicle.
 */
@Exclude()
export class VehicleDto extends AbstractSerializableDto {
  //region Fields
  private _id!: number;
  private _licensePlate!: string;
  private _manufacturer!: string;
  private _model!: string;
  private _vin!: string;
  private _exteriorColor!: string;
  private _registration!: string;
  private _type!: string;
  private _introductionl!: string;
  private _insurance!: string;
  private _fuel!: string;
  private _transmission!: string;
  private _priority!: string;
  private _diagnosis!: string;
  private _support!: string;
  private _notes!: string;
  private _vehiclescol!: string;
  private _driver!: DriverDto;
  //endregion

  //region Constructor
  /**
   * Create an instance of an dto vehicle.
   */
  constructor() {
    super();
  }
  //endregion

  //region Accessors
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
   * Unique license plate.
   */
  @Expose()
  get licensePlate(): string {
    return this._licensePlate;
  }
  set licensePlate(value: string) {
    this._licensePlate = value;
  }

  /**
   * NAme of the manufacturer.
   */
  @Expose()
  get manufacturer(): string {
    return this._manufacturer;
  }
  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  /**
   * Name of the model.
   */
  @Expose()
  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }

  /**
   * Vehicle Identification Number.
   */
  @Expose()
  get vin(): string {
    return this._vin;
  }
  set vin(value: string) {
    this._vin = value;
  }

  /**
   * Name of the exterior color.
   */
  @Expose()
  get exteriorColor(): string {
    return this._exteriorColor;
  }
  set exteriorColor(value: string) {
    this._exteriorColor = value;
  }

  /**
   * Registration number.
   */
  @Expose()
  get registration(): string {
    return this._registration;
  }
  set registration(value: string) {
    this._registration = value;
  }

  /**
   * Type code.
   */
  @Expose()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  /**
   * Introduction date.
   */
  @Expose()
  get introductionl(): string {
    return this._introductionl;
  }
  set introductionl(value: string) {
    this._introductionl = value;
  }

  /**
   * Name of the insurance.
   */
  @Expose()
  get insurance(): string {
    return this._insurance;
  }
  set insurance(value: string) {
    this._insurance = value;
  }

  /**
   * Fuel type.
   */
  @Expose()
  get fuel(): string {
    return this._fuel;
  }
  set fuel(value: string) {
    this._fuel = value;
  }

  /**
   * Transmission type.
   */
  @Expose()
  get transmission(): string {
    return this._transmission;
  }
  set transmission(value: string) {
    this._transmission = value;
  }

  /**
   * Priority type.
   */
  @Expose()
  get priority(): string {
    return this._priority;
  }
  set priority(value: string) {
    this._priority = value;
  }

  /**
   * Diagnosis type.
   */
  @Expose()
  get diagnosis(): string {
    return this._diagnosis;
  }
  set diagnosis(value: string) {
    this._diagnosis = value;
  }

  /**
   * Support type.
   */
  @Expose()
  get support(): string {
    return this._support;
  }
  set support(value: string) {
    this._support = value;
  }

  /**
   * Notes for help.
   */
  @Expose()
  get notes(): string {
    return this._notes;
  }
  set notes(value: string) {
    this._notes = value;
  }

  /**
   * Col number.
   */
  @Expose()
  get vehiclescol(): string {
    return this._vehiclescol;
  }
  set vehiclescol(value: string) {
    this._vehiclescol = value;
  }

  /**
   * Driver object.
   */
  @Type(() => DriverDto)
  @Expose()
  get driver(): DriverDto {
    return this._driver;
  }
  set driver(value: DriverDto) {
    this._driver = value;
  }
  //endregion
}
