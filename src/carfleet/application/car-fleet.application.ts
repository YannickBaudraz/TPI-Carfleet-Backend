/*
 * Description  :   Application manager
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - car-fleet.application.ts
 *
 * Created      :   18.02.2021 - Create express application with routing-controllers module.
 *
 * Updates      :   02.03.2021
 *                      Connect to database with typeorm module.
 *                  08.03.2021
 *                      Use development mode based on TS_NODE_DEV used or not.
 *
 * Created with WebStorm.
 */

import { Application } from 'express';
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { DriverController, VehicleController } from '../controllers';
import { CarFleetConstants } from './car-fleet.constants';

/**
 * This class manage the carFleet application.
 */
export class CarFleetApplication {
  //region Fields
  private readonly _expressApplication: Application;
  //endregion

  //region Constructor
  /**
   * Create the application of car fleet.
   */
  constructor() {
    useContainer(Container);

    this._expressApplication = createExpressServer({
      cors: {
        origin: /:4200/,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
      },
      routePrefix: CarFleetConstants.PREFIX_API_PATH,
      controllers: [DriverController, VehicleController],
      development: process.env.NODE_ENV === 'development',
    });
  }

  //endregion

  //region Methods
  /**
   * Express application.
   */
  get expressApplication(): Application {
    return this._expressApplication;
  }

  //endregion
}
