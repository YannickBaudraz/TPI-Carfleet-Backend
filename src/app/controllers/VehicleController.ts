/*
 * Description  :   Controller for vehicles
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - VehicleController.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Response } from 'express';
import * as jsonfile from 'jsonfile';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from 'routing-controllers';
import { VehicleDto } from '../models/dtos/VehicleDto';
import { BackendResponseBody } from '../models/interfaces/BackendResponseBody';
import { ResponseService } from '../models/services/ResponseService';
import { TransformationService } from '../models/services/TransformationService';
import { LiteralJSONObject } from '../models/types/LiteralJSONObject';

@Controller('/vehicles')
export class VehicleController {
  constructor(private readonly transformationService: TransformationService) {
    this.transformationService = new TransformationService();
  }

  // TODO : Remove when using real database
  private static readVehiclesJson(): JsonFromDataset[] {
    return jsonfile.readFileSync('./src/data/vehicles_test.json');
  }

  private static writeVehiclesJson(vehicleJson: JsonFromDataset[]): void {
    jsonfile.writeFileSync('./src/data/vehicles_test.json', vehicleJson);
  }

  /**
   * Redirect to '/all'.
   *
   * @param res - The HTTP response to redirect with
   *
   * @return The HTTP response
   */
  @Get()
  base(@Res() res: Response): Response<BackendResponseBody> {
    return this.all(res);
  }

  /**
   * Get all vehicles.
   *
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Get('/all')
  all(@Res() res: Response): Response<BackendResponseBody> {
    const vehiclesJson: JsonFromDataset[] = VehicleController.readVehiclesJson();
    const vehiclesDto: VehicleDto[] = this.transformationService.jsonArrayToVehicles(
      vehiclesJson
    );

    return new ResponseService(res).sendOk(vehiclesDto);
  }

  /**
   * Get one vehicle
   *
   * @param id - The unique identifier
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Get('/:id')
  one(
    @Param('id') id: number,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const vehiclesJson: JsonFromDataset[] = VehicleController.readVehiclesJson();
    const found: JsonFromDataset | undefined = vehiclesJson.find(
      (vehicle: JsonFromDataset) => vehicle.id === id
    );

    if (found) {
      const vehicleDto: VehicleDto = this.transformationService.jsonToVehicle(
        found
      );
      return new ResponseService(res).sendOk(vehicleDto);
    }

    return new ResponseService(res).sendOk(null, 'No vehicle found');
  }

  /**
   * Save ta vehicle.
   *
   * @param vehicle - The vehicle object passed by method POST
   * @param res - The HTTP response
   *
   * @return {Response<BackendResponseBody>} response to send
   */
  @Post('/save')
  saveOne(
    @Body() vehicle: VehicleDto,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const vehicleJson: LiteralJSONObject = vehicle.toJSON();
    const vehiclesJson: JsonFromDataset[] = VehicleController.readVehiclesJson();

    vehicleJson.id = vehiclesJson[vehiclesJson.length - 1].id + 1;
    vehiclesJson.push(vehicleJson as JsonFromDataset);
    VehicleController.writeVehiclesJson(vehiclesJson);

    const vehicleDto: VehicleDto = this.transformationService.jsonToVehicle(
      vehicleJson
    );
    return new ResponseService(res).sendCreated(
      vehicleDto,
      'Vehicle created with success'
    );
  }

  /**
   * Delete a vehicle
   *
   * @param id - The unique identifier
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Delete('/:id')
  deleteOne(
    @Param('id') id: number,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const vehiclesJson: JsonFromDataset[] = VehicleController.readVehiclesJson();
    const found: JsonFromDataset | undefined = vehiclesJson.find(
      (vehicle: { id: number }) => vehicle.id === id
    );

    if (found) {
      vehiclesJson.splice(vehiclesJson.indexOf(found), 1);
      VehicleController.writeVehiclesJson(vehiclesJson);

      return new ResponseService(res).sendOk();
    }

    return new ResponseService(res).sendOk(null, 'No vehicle matched with id');
  }

  /**
   * Update a vehicle
   *
   * @param vehicle - The vehicle to update
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Put('/update')
  updateOne(
    @Body() vehicle: VehicleDto,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const vehiclesJson: JsonFromDataset[] = VehicleController.readVehiclesJson();
    const found: JsonFromDataset | undefined = vehiclesJson.find(
      (vehicleJson: { id: number }) => vehicleJson.id === vehicle.id
    );

    if (found) {
      const vehicleEdited = vehicle.toJSON() as JsonFromDataset;
      vehiclesJson.splice(vehiclesJson.indexOf(found), 1, vehicleEdited);
      VehicleController.writeVehiclesJson(vehiclesJson);

      return new ResponseService(res).sendOk(vehicle, 'Vehicle edited');
    }

    return new ResponseService(res).sendOk(null, 'Could not edit');
  }
}

// TODO : Remove when using real database
type JsonFromDataset = {
  id: number;
  registrationNumber: string;
  chassisNumber: string;
};
