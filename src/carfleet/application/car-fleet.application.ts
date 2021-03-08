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
import { createExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';
import { VehicleController } from '../controllers';

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
    this._expressApplication = createExpressServer({
      routePrefix: '/api',
      controllers: [VehicleController],
      development: !!process.env.TS_NODE_DEV,
    });

    createConnection()
      .then(() => console.log('Connected to the database.'))
      .catch((error: Error) => console.error(error));
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
