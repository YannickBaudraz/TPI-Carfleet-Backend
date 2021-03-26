/*
 * Description  :   This class create vehicle dto for test.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - VehicleDtoHelper.ts
 *
 * Created      :   23.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { VehicleDto } from '../../../src/carfleet/models/dtos';
import { AbstractSerializableTestFactory } from './abstract-serializable-test.factory';
import { DriversTestFactory } from './drivers-test.factory';

/**
 * This class create vehicle dto for test.
 */
export class VehiclesTestFactory extends AbstractSerializableTestFactory {
  /**
   * Create a full vehicle dto.
   *
   * @return A vehicle dto with all data.
   */
  static createFullVehicleDto(): VehicleDto {
    const vehicleDto: VehicleDto = new VehicleDto();

    vehicleDto.id = 2;
    vehicleDto.licensePlate = 'VS474026';
    vehicleDto.manufacturer = 'Volkswagen';
    vehicleDto.model = 'Golf';
    vehicleDto.vin = 'BJ0HBEULJMRMO68N5';
    vehicleDto.exteriorColor = 'Orange';
    vehicleDto.registration = '310.198.502';
    vehicleDto.type = '6JIML';
    vehicleDto.introductionl = '2021-02-19';
    vehicleDto.insurance = 'Koch-Marvin';
    vehicleDto.fuel = 'Diesel';
    vehicleDto.transmission = 'Automatique';
    vehicleDto.priority = 'En ordre';
    vehicleDto.diagnosis = 'bandwidth-monitored';
    vehicleDto.support = 'Assurance';
    vehicleDto.notes = 'augue a suscipit';
    vehicleDto.vehiclescol = '9.8';

    vehicleDto.driver = DriversTestFactory.createFullDriverDto();

    return this.removeLeadingUnderscoreInFields(vehicleDto) as VehicleDto;
  }
}
