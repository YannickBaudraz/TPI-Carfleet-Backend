/*
 * Description  :   Controller for vehicles
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - vehicle.controller.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   02.03.2021
 *                      Vehicles are now retrieved from database instead of
 *                      a Json file.
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
  Res
} from 'routing-controllers';
import { getRepository, Repository } from 'typeorm';
import { VehicleDto } from '../models/dtos';
import { VehicleEntity } from '../models/entities';
import { BackendResponseBody } from '../models/interfaces/backend-response-body';
import { ResponseService } from '../models/services/response.service';
import { TransformationService } from '../models/services/transformation.service';
import { LiteralJsonObject } from '../models/types/literal-json-object';

@Controller('/vehicles')
export class VehicleController {
  private _vehicleRepository: Repository<VehicleEntity>;

  constructor(private readonly transformationService: TransformationService) {
    this._vehicleRepository = getRepository(VehicleEntity);
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
   */
  @Get()
  async base(@Res() res: Response): Promise<void> {
    await this.all(res);
  }

  /**
   * Get all vehicles.
   *
   * @param res - The HTTP response
   *
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponseBody>> {
    const vehicleDto = this.transformationService.toVehiclesDto(
      ((await this._vehicleRepository.find()) as unknown) as LiteralJsonObject[]
    );
    return new ResponseService(res).sendOk(vehicleDto);
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
    const vehicleJson: LiteralJsonObject = vehicle.toJSON();
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
