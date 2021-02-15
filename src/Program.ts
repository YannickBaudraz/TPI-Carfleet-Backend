/*
 * Description  :   Entry point of the application
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - Program.ts
 *
 * Created      :   12.02.2021 - Basic init
 *
 * Updates      :   12.02.2021
 *                      Add documentation
 *
 * Created with WebStorm.
 */

import { Server } from './app/Server/Server';

/**
 * This class is the application entry point.
 */
export class Program {
  private static _instance: Program;

  private constructor() {}

  /**
   * Entry point method.
   *
   * @param port - The port on which the application will run.
   */
  public static main(port: number): void {
    if (!this._instance) {
      this._instance = new Program();
      Server.init(port);
    }
  }
}

Program.main(3000);
