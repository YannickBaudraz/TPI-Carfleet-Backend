/*
 * Description  :   Controller for vehicles
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - vehicle.controller.ts
 *
 * Created      :   18.02.2021 - Create with routes /api/vehicles :
 *                    - GET : '', '/all', '/:id'
 *                    - POST : '/save'
 *                    - PUT : '/update'
 *                    - DELETE : '/:id'
 *
 * Updates      :   02.03.2021
 *                      Vehicles are now retrieved from database instead of a Json file.
 *
 * Created with WebStorm.
 */

import { Response } from 'express';
import { Body, Delete, Get, JsonController, Param, Post, Put, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarFleetConstants } from '../application/car-fleet.constants';
import { VehicleDto } from '../models/dtos';
import { BackendResponse } from '../models/interfaces';
import { ResponseService, VehicleService } from '../services';
import { AbstractController } from './abstract.controller';

/**
 * This class is the controller for vehicles.
 */
@Service()
@JsonController(CarFleetConstants.VEHICLES_API_PATH)
export class VehicleController extends AbstractController {
  //region Constructor
  /**
   * Create a vehicle controller
   */
  constructor(private readonly _vehicleService: VehicleService) {
    super();
  }
  //endregion

  /**
   * Get all vehicles.
   *
   * @param res - The HTTP response
   *
   * @return A promise with the HTTP response
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponse>> {
    const vehicleDtos = await this._vehicleService.getAll();

    return new ResponseService(res).sendOk(vehicleDtos);
  }

  /**
   * Get one vehicle
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP response
   */
  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponse>> {
    const vehicleDto: VehicleDto | undefined = await this._vehicleService.getById(id);

    return vehicleDto
      ? new ResponseService(res).sendOk(vehicleDto)
      : new ResponseService(res).sendOk(null, 'No vehicle found');
  }

  /**
   * Save a vehicle.
   *
   * @param res - The HTTP response
   * @param vehicleDto - The vehicle object passed by method POST
   *
   * @return A promise with the HTTP response
   */
  @Post('/save')
  async saveOne(@Res() res: Response, @Body() vehicleDto: VehicleDto): Promise<Response<BackendResponse>> {
    vehicleDto = await this._vehicleService.create(vehicleDto);

    return new ResponseService(res).sendCreated(vehicleDto, 'Vehicle created with success');
  }

  /**
   * Update a vehicle
   *
   * @param res - The HTTP response
   * @param vehicleDto - The vehicle to update
   *
   * @return A promise with the HTTP response
   */
  @Put('/update')
  async updateOne(@Res() res: Response, @Body() vehicleDto: VehicleDto): Promise<Response<BackendResponse>> {
    const updateResult: UpdateResult = await this._vehicleService.update(vehicleDto);

    return updateResult.affected
      ? new ResponseService(res).sendOk(vehicleDto, 'Vehicle edited')
      : new ResponseService(res).sendOk(undefined, 'Could not edit');
  }

  /**
   * Delete a vehicle
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP response
   */
  @Delete('/:id')
  async deleteOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponse>> {
    const deleteResult: DeleteResult = await this._vehicleService.deleteById(id);

    return deleteResult.affected
      ? new ResponseService(res).sendOk()
      : new ResponseService(res).sendOk(undefined, 'No vehicle matched with id');
  }
  //endregion
}
