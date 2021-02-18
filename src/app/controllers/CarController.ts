/*
 * Description  :   Controller for cars
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - CarController.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Response } from 'express';
import { Controller, Get, Param, Res } from 'routing-controllers';
import * as carsDataset from '../../data/cars.json';
import { CarDto } from '../models/dto/CarDto';
import { BackendResponseBody } from '../models/interfaces/BackendResponseBody';
import { ResponseService } from '../models/services/ResponseService';
import { TransformationService } from '../models/services/TransformationService';
import { LiteralObject } from '../models/types/LiteralObject';

@Controller('/cars')
export class CarController {
  @Get()
  base(@Res() res: Response): Response<BackendResponseBody> {
    return this.all(res);
  }

  @Get('/all')
  all(@Res() res: Response): Response<BackendResponseBody> {
    return new ResponseService(res).sendSuccess(null);
  }

  @Get('/:id')
  one(
    @Res() res: Response,
    @Param('id') id: number
  ): Response<BackendResponseBody> {
    const found = carsDataset.find((car) => car.id === id);
    const body: CarDto | LiteralObject = found
      ? new TransformationService().jsonToCar(found)
      : {};
    const message = 'No data found';

    return new ResponseService(res).sendSuccess(body, message);
  }
}
