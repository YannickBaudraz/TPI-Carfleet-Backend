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
import { Get, JsonController, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { BackendResponse } from '../models/interfaces';
import { DriverService, ResponseService } from '../models/services';

/**
 * This class is the controller for drivers.
 */
@Service()
@JsonController('/drivers')
export class DriverController {
  /**
   * Create a driver controller.
   */
  constructor(private readonly _driverService: DriverService) {}

  /**
   * Redirect to '/all'.
   *
   * @param res - The HTTP response to redirect with
   *
   * @return A promise with the HTTP response
   */
  @Get()
  async base(@Res() res: Response): Promise<Response<BackendResponse>> {
    return await this.all(res);
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
}
