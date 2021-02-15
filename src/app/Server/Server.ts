/*
 * Description  :   Manage the application
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - Server.ts
 *
 * Created      :   12.02.2021 - Create server with listening
 *
 * Updates      :   12.02.2021
 *                      Add documentation
 *
 * Created with WebStorm.
 */

import { Express } from 'express';
import express = require('express');

/**
 * This class manages the application.
 */
export class Server {

  private static _instance: Server;
  private _app: Express;

  private constructor(private port: number) {
    this._app = express();
    this._app.get('/', (req, res) => {
      res.send('Hello World !');
    });
  }

  /**
   *
   * Initialize the application.
   *
   * @param {number} port - The port of the server.
   *
   * @return Server
   */
  public static init(port: number): Server {
    if (this._instance == null) {
      this._instance = new Server(port);
    }

    return this._instance;
  }

  /**
   * Start listening for connection.
   *
   * @param callback
   */
  public listen(callback: Function): void {
    this._app.listen(this.port, callback());
  }
}
