/*
 * Description  :   Program entry point.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - program.ts
 *
 * Created      :   12.02.2021 - Basic init
 *
 * Updates      :   12.02.2021
 *                      Add documentation
 *
 * Created with WebStorm.
 */

import { config } from 'dotenv';
import { CarFleetApplication } from './carfleet/application/car-fleet.application';
import { Server } from './server/server';

/**
 * This class is the application entry point.
 */
export class Program {
  //region Fields
  private static _instance: Program;
  //endregion

  //region Private constructor
  /**
   * Create an instance of the program.
   */
  private constructor() {}
  //endregion

  //region Methods
  /**
   * Entry point method.
   */
  static main(): void {
    if (!this._instance) {
      config({ path: `config/env/.env.${process.env.NODE_ENV}` });
      this._instance = new Program();

      const server = new Server(new CarFleetApplication());
      server.listen(3000, 'localhost');
    }
  }
  //endregion
}

Program.main();
