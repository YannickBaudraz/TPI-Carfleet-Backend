/*
 * Description  :   Manage the application server
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - server.ts
 *
 * Created      :   12.02.2021 - Create server with listening
 *
 * Updates      :   12.02.2021
 *                      Add documentation
 *                  16.02.2021
 *                      Add routes
 *                  18.02.2021
 *                      Remove singleton pattern
 *
 * Created with WebStorm.
 */

import * as console from 'console';
import { Application } from 'express';
import * as http from 'http';
import { AddressInfo } from 'net';
import { ServerErrorCode } from '../../lib/enums/server-error-code';
import ErrnoException = NodeJS.ErrnoException;

/**
 * This class manages the application server.
 */
export class Server {
  //region Fields

  private readonly _app: Application;
  private readonly _httpServer: http.Server;

  //endregion

  //region Constructor

  constructor(app: Application) {
    this._app = app;
    this._httpServer = this.createHttpServer();
  }

  //endregion

  //region Methods

  //region Public methods

  /**
   * Start listening on port
   *
   * @param port - The post to listen
   * @param hostname - The hostname of the application
   */
  listen(port = 3000, hostname = 'localhost'): void {
    this._app.set('port', port);
    this._app.set('hostname', hostname);
    this._httpServer.on('listening', () => this.onListening());
    this._httpServer.listen(port, hostname);
  }

  //endregion

  //region Private methods

  private createHttpServer(): http.Server {
    const server = http.createServer(this._app);
    server.on('error', (e) => this.onError(e));

    return server;
  }

  private onError(error: ErrnoException) {
    if (error.syscall !== 'listen') throw error;

    switch (error.code) {
      case ServerErrorCode.EACCES:
        console.error(`${error.message}. Requires elevated privileges`);
        process.exit(1);
        break;
      case ServerErrorCode.EADDRINUSE: {
        const port = `${this._app.get('port')}`;
        const hostname = `${this._app.get('hostname')}`;
        console.error(`Port ${port} at ${hostname} is already in use`);
        process.exit(1);
        break;
      }
      default:
        throw error.code;
    }
  }

  private onListening() {
    const addressInfo = this._httpServer.address() as AddressInfo;
    const address = addressInfo.address;
    const port = addressInfo.port;
    console.info(`Listening on http://${address}:${port}`);
  }

  //endregion

  //endregion
}
