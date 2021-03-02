/*
 * Description  :   Application manager
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - car-fleet.application.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Application } from 'express';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';
import { VehicleController } from './controllers/vehicle.controller';

export class CarFleetApplication {
  expressApplication: Application;

  constructor() {
    this.expressApplication = createExpressServer({
      routePrefix: '/api',
      controllers: [VehicleController],
    });

    createConnection()
      .then(() => console.log('Connected to the database.'))
      .catch((error) => console.error(error.message));
  }
}
