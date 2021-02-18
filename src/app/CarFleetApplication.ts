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

import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { CarController } from './controllers/CarController';

export class CarFleetApplication {
  constructor() {
    const app = createExpressServer({
      routePrefix: '/api',
      controllers: [CarController],
    });

    app.listen(3000);
  }
}
