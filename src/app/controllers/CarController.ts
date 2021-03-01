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
import { CarDto } from '../models/dtos/CarDto';
import { BackendResponseBody } from '../models/interfaces/BackendResponseBody';
import { ResponseService } from '../models/services/ResponseService';
import { TransformationService } from '../models/services/TransformationService';
import { LiteralJSONObject } from '../models/types/LiteralJSONObject';

@Controller('/cars')
export class CarController {
  constructor(private readonly transformationService: TransformationService) {
    this.transformationService = new TransformationService();
  }

  // TODO : Remove when using real database
  private static readCarsJson(): JsonFromDataset[] {
    return jsonfile.readFileSync('./src/data/cars_test.json');
  }

  private static writeCarsJson(carJson: JsonFromDataset[]): void {
    jsonfile.writeFileSync('./src/data/cars_test.json', carJson);
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
   * Get all cars.
   *
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Get('/all')
  all(@Res() res: Response): Response<BackendResponseBody> {
    const carsJson: JsonFromDataset[] = CarController.readCarsJson();
    const carsDto: CarDto[] = this.transformationService.jsonArrayToCars(
      carsJson
    );

    return new ResponseService(res).sendOk(carsDto);
  }

  /**
   * Get one car
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
    const carsJson: JsonFromDataset[] = CarController.readCarsJson();
    const found: JsonFromDataset | undefined = carsJson.find(
      (car: JsonFromDataset) => car.id === id
    );

    if (found) {
      const carDto: CarDto = this.transformationService.jsonToCar(found);
      return new ResponseService(res).sendOk(carDto);
    }

    return new ResponseService(res).sendOk(null, 'No car found');
  }

  /**
   * Save ta car.
   *
   * @param car - The car object passed by method POST
   * @param res - The HTTP response
   *
   * @return {Response<BackendResponseBody>} response to send
   */
  @Post('/save')
  saveOne(
    @Body() car: CarDto,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const carJson: LiteralJSONObject = car.toJSON();
    const carsJson: JsonFromDataset[] = CarController.readCarsJson();

    carJson.id = carsJson[carsJson.length - 1].id + 1;
    carsJson.push(carJson as JsonFromDataset);
    CarController.writeCarsJson(carsJson);

    const carDto: CarDto = this.transformationService.jsonToCar(carJson);
    return new ResponseService(res).sendCreated(
      carDto,
      'Car created with success'
    );
  }

  /**
   * Delete a car
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
    const carsJson: JsonFromDataset[] = CarController.readCarsJson();
    const found: JsonFromDataset | undefined = carsJson.find(
      (car: { id: number }) => car.id === id
    );

    if (found) {
      carsJson.splice(carsJson.indexOf(found), 1);
      CarController.writeCarsJson(carsJson);

      return new ResponseService(res).sendOk();
    }

    return new ResponseService(res).sendOk(null, 'No car matched with id');
  }

  /**
   * Update a car
   *
   * @param car - The car to update
   * @param res - The HTTP response
   *
   * @return The response to send
   */
  @Put('/update')
  updateOne(
    @Body() car: CarDto,
    @Res() res: Response
  ): Response<BackendResponseBody> {
    const carsJson: JsonFromDataset[] = CarController.readCarsJson();
    const found: JsonFromDataset | undefined = carsJson.find(
      (carJson: { id: number }) => carJson.id === car.id
    );

    if (found) {
      const carEdited = car.toJSON() as JsonFromDataset;
      carsJson.splice(carsJson.indexOf(found), 1, carEdited);
      CarController.writeCarsJson(carsJson);

      return new ResponseService(res).sendOk(car, 'Car edited');
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
