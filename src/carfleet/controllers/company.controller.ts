/*
 * Description  :   Controller for companies.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - driver.controller.ts
 *
 * Created      :   07.05.2021
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
import { CompanyDto } from '../models/dtos';
import { BackendResponse } from '../models/interfaces';
import { CompanyService, ResponseService } from '../services';
import { AbstractController } from './abstract.controller';

/**
 * This class is the controller fot companies
 */
@Service()
@JsonController(CarFleetConstants.COMPANIES_API_PATH)
export class CompanyController extends AbstractController {
  //region Constructor
  /**
   * Create a company controller.
   */
  constructor(private readonly _companyService: CompanyService) {
    super();
  }
  //endregion

  //region Methods
  /**
   * Get all companies.
   *
   * @param res - The HTTP response
   *
   * @return A promise with the HTTP response
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponse>> {
    const companyDtos = await this._companyService.getAll();

    return new ResponseService(res).sendOk(companyDtos);
  }

  /**
   * Get one company.
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP Response
   */
  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponse>> {
    const companyDto: CompanyDto | undefined = await this._companyService.getById(id);

    return companyDto
      ? new ResponseService(res).sendOk(companyDto)
      : new ResponseService(res).sendOk(null, 'No company found');
  }
  //endregion
}
