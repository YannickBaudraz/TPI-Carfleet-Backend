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
import { IsDefined } from 'class-validator';
import { SerializableDto } from './serializable.dto';

// noinspection JSUnusedGlobalSymbols
@Exclude()
/**
 * This class represents a vehicle.
 */
export class VehicleDto extends SerializableDto {
  // region Fields

  private _id!: number;
  @IsDefined() private _driverId!: number;
  @IsDefined() private _driverCompanyId!: number;
  private _licensePlate!: string;
  private _manufacturer!: string;
  private _model!: string;
  private _vin!: string;
  private _exteriorColor!: string;
  private _registration!: string;
  private _type!: string;
  private _introductionl!: Date;
  private _insurance!: string;
  private _fuel!: string;
  private _transmission!: string;
  private _priority!: string;
  private _diagnosis!: string;
  private _support!: string;
  private _notes!: string;
  private _vehiclescol!: string;

  // endregion

  // region Constructor

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
  get driverId(): number {
    return this._driverId;
  }

  set driverId(value: number) {
    this._driverId = value;
  }

  @Expose()
  get driverCompanyId(): number {
    return this._driverCompanyId;
  }

  set driverCompanyId(value: number) {
    this._driverCompanyId = value;
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
  get introductionl(): Date {
    return this._introductionl;
  }

  set introductionl(value: Date) {
    this._introductionl = value;
  }

  @Expose()
  get insurance(): string {
    return this._insurance;
  }

  set insurance(value: string) {
    this._insurance = value;
  }

  @Expose()
  get fuel(): string {
    return this._fuel;
  }

  set fuel(value: string) {
    this._fuel = value;
  }

  @Expose()
  get transmission(): string {
    return this._transmission;
  }

  set transmission(value: string) {
    this._transmission = value;
  }

  @Expose()
  get priority(): string {
    return this._priority;
  }

  set priority(value: string) {
    this._priority = value;
  }

  @Expose()
  get diagnosis(): string {
    return this._diagnosis;
  }

  set diagnosis(value: string) {
    this._diagnosis = value;
  }

  @Expose()
  get support(): string {
    return this._support;
  }

  set support(value: string) {
    this._support = value;
  }

  @Expose()
  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  @Expose()
  get vehiclescol(): string {
    return this._vehiclescol;
  }

  set vehiclescol(value: string) {
    this._vehiclescol = value;
  }

  //endregion
}
