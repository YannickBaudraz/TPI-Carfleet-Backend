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
import { Body, Delete, Get, JsonController, Param, Post, Put, Res } from 'routing-controllers';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { VehicleDto } from '../models/dtos';
import { VehicleEntity } from '../models/entities';
import { BackendResponseBody } from '../models/interfaces';
import { ResponseService, TransformationService, VehicleService } from '../models/services';

@JsonController('/vehicles')
export class VehicleController {
  private readonly _vehicleRepository: Repository<VehicleEntity>;
  private readonly _vehicleService: VehicleService;
  private readonly _transformationService: TransformationService;

  constructor() {
    this._vehicleRepository = getRepository(VehicleEntity);
    this._transformationService = new TransformationService();
    this._vehicleService = new VehicleService(this._transformationService);
  }

  /**
   * Redirect to '/all'.
   *
   * @param res - The HTTP response to redirect with
   *
   */
  @Get()
  async base(@Res() res: Response): Promise<Response<BackendResponseBody>> {
    return await this.all(res);
  }

  /**
   * Get all vehicles.
   *
   * @param res - The HTTP response
   *
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponseBody>> {
    const vehicleDtos = await this._vehicleService.getAllFromDb();

    return new ResponseService(res).sendOk(vehicleDtos);
  }

  /**
   * Get one vehicle
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   */
  @Get('/:id')
  async one(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponseBody>> {
    const vehicleDto: VehicleDto | undefined = await this._vehicleService.getOnFromDb(id);

    return vehicleDto
      ? new ResponseService(res).sendOk(vehicleDto)
      : new ResponseService(res).sendOk(null, 'No vehicle found');
  }

  /**
   * Save a vehicle.
   *
   * @param res - The HTTP response
   * @param vehicleDto - The vehicle object passed by method POST
   */
  @Post('/save')
  async saveOne(@Res() res: Response, @Body() vehicleDto: VehicleDto): Promise<Response<BackendResponseBody>> {
    vehicleDto = await this._vehicleService.createOneInDb(vehicleDto);

    return new ResponseService(res).sendCreated(vehicleDto, 'Vehicle created with success');
  }

  /**
   * Update a vehicle
   *
   * @param res - The HTTP response
   * @param vehicleDto - The vehicle to update
   */
  @Put('/update')
  async updateOne(@Res() res: Response, @Body() vehicleDto: VehicleDto): Promise<Response<BackendResponseBody>> {
    const updateResult: UpdateResult = await this._vehicleService.updateOneInDb(vehicleDto);

    return updateResult.affected
      ? new ResponseService(res).sendOk(vehicleDto, 'Vehicle edited')
      : new ResponseService(res).sendOk(undefined, 'Could not edit');
  }

  /**
   * Delete a vehicle
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   */
  @Delete('/:id')
  async deleteOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponseBody>> {
    const deleteResult: DeleteResult = await this._vehicleService.deleteOneInDb(id);

    return deleteResult.affected
      ? new ResponseService(res).sendOk()
      : new ResponseService(res).sendOk(undefined, 'No vehicle matched with id');
  }
}
