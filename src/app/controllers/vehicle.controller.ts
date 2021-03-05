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
import { BackendResponseBody } from '../models/interfaces/backend-response-body';
import { ResponseService } from '../models/services/response.service';
import { TransformationService } from '../models/services/transformation.service';

@JsonController('/vehicles')
export class VehicleController {
  private _vehicleRepository: Repository<VehicleEntity>;

  constructor(private readonly transformationService: TransformationService) {
    this._vehicleRepository = getRepository(VehicleEntity);
    this.transformationService = new TransformationService();
  }

  /**
   * Redirect to '/all'.
   *
   * @param res - The HTTP response to redirect with
   *
   */
  @Get()
  async base(@Res() res: Response): Promise<Response<BackendResponseBody>> {
    return this.all(res);
  }

  /**
   * Get all vehicles.
   *
   * @param res - The HTTP response
   *
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponseBody>> {
    const vehicleEntities: VehicleEntity[] = await this._vehicleRepository.find({ licensePlate: 'FR348947' });
    const vehicleDtos: VehicleDto[] = this.transformationService.vehicleEntitiesToDtos(vehicleEntities);

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
    const vehicleEntity: VehicleEntity | undefined = await this._vehicleRepository.findOne(id);

    if (vehicleEntity) {
      return new ResponseService(res).sendOk(this.transformationService.vehicleEntityToDto(vehicleEntity));
    }

    return new ResponseService(res).sendOk(null, 'No vehicle found');
  }

  /**
   * Save a vehicle.
   *
   * @param res - The HTTP response
   * @param vehicleDto - The vehicle object passed by method POST
   */
  @Post('/save')
  async saveOne(@Res() res: Response, @Body() vehicleDto: VehicleDto): Promise<Response<BackendResponseBody>> {
    const vehicleEntity = this.transformationService.vehicleDtoToEntity(vehicleDto);
    await this._vehicleRepository.insert(vehicleEntity);
    vehicleDto = this.transformationService.vehicleEntityToDto(vehicleEntity);

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
    const updateResult: UpdateResult = await this._vehicleRepository.update(
      { id: vehicleDto.id, driverId: vehicleDto.driverId, driverCompanyId: vehicleDto.driverCompanyId },
      this.transformationService.vehicleDtoToEntity(vehicleDto)
    );

    if (updateResult.affected) {
      return new ResponseService(res).sendOk(vehicleDto, 'Vehicle edited');
    }

    return new ResponseService(res).sendOk(null, 'Could not edit');
  }

  /**
   * Delete a vehicle
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   */
  @Delete('/:id')
  async deleteOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponseBody>> {
    const deleteResult: DeleteResult = await this._vehicleRepository.delete(id);

    if (deleteResult.affected) {
      return new ResponseService(res).sendOk();
    }

    return new ResponseService(res).sendOk(null, 'No vehicle matched with id');
  }
}
