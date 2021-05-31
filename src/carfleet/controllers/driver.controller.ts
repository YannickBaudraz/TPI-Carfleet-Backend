/*
 * Description  :   Controller for drivers.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - driver.controller.ts
 *
 * Created      :   25.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { Response } from 'express';
import { Get, JsonController, Param, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { CarFleetConstants } from '../application/car-fleet.constants';
import { DriverDto } from '../models/dtos';
import { BackendResponse } from '../models/interfaces';
import { DriverService, ResponseService } from '../services';
import { AbstractController } from './abstract.controller';

/**
 * This class is the controller for drivers.
 */
@Service()
@JsonController(CarFleetConstants.DRIVERS_API_PATH)
export class DriverController extends AbstractController {
  /**
   * Create a driver controller.
   */
  constructor(private readonly _driverService: DriverService) {
    super();
  }

  /**
   * Get all drivers.
   *
   * @param res - The HTTP response
   *
   * @return A promise with the HTTP response
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponse>> {
    const driversDtos = await this._driverService.getAll();

    return new ResponseService(res).sendOk(driversDtos);
  }

  /**
   * Get one driver
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP response
   */
  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponse>> {
    const driverDto: DriverDto | undefined = await this._driverService.getById(id);

    return driverDto
      ? new ResponseService(res).sendOk(driverDto)
      : new ResponseService(res).sendOk(null, 'No drivers found with the id requested.');
  }
}
