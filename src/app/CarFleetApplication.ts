/*
 * Description  :   Application manager
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - CarFleetApplication.ts
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
import { CarController } from './controllers/CarController';

export class CarFleetApplication {
  expressApplication: Application;

  constructor() {
    this.expressApplication = createExpressServer({
      routePrefix: '/api',
      controllers: [CarController],
    });
  }
}
