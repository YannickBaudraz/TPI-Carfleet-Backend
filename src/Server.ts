/*
 * Description  :   Manage the application
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - Server.ts
 *
 * Created      :   12.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Express } from 'express';
import express = require('express');

export class Server {

  private _app: Express;

  private constructor(private port: number) {
    this._app = express();
    this._app.get('/', (req, res) => {
      res.send('Hello World !');
    });
  }

  static init(port: number): Server {
    return new Server(port);
  }

  listen(callback: Function): void {
    this._app.listen(this.port, callback());
  }
}
