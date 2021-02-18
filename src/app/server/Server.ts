/*
 * Description  :   Manage the application
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
 *                      Adding routes
 *
 * Created with WebStorm.
 */

import { Express, json, Request, Response, Router } from 'express';
import * as http from 'http';
import { AddressInfo } from 'net';
import * as carsDataset from '../../data/cars.json';
import { CarDto } from '../models/dto/CarDto';
import { ResponseService } from '../models/services/ResponseService';
import ErrnoException = NodeJS.ErrnoException;

/**
 * This class manages the application.
 */
export class Server {
  //region Fields

  private static _instance: Server;

  private readonly _app: Express;
  private readonly _router: Router;
  private readonly _httpServer: http.Server;
  private readonly _port: number;

  //endregion

  //region Constructor

  private constructor(app: Express, router: Router, port: number) {
    this._router = router;
    this._app = app;
    this._port = port;
    this._httpServer = this.createHttpServer();

    this.initRoutes();
  }

  //endregion

  //region Accessors

  static get instance(): Server {
    return this._instance;
  }

  //endregion

  //region Methods

  //region Static methods

  /**
   *
   * Initialize the application.
   *
   * @param app - The application
   * @param router - The router
   * @param port - The port to listen
   */
  public static init(app: Express, router: Router, port: number): void {
    this._instance = this._instance ?? new Server(app, router, port);
  }

  //endregion

  //region Instance methods

  private initRoutes() {
    const cars: CarDto[] = carsDataset.map((car) => {
      new CarDto(car.id, car.registrationNumber, car.chassisNumber);
      return new CarDto(car.id, car.registrationNumber, car.chassisNumber);
    });

    const prefix = '/api';

    this._router.get(`${prefix}/cars`, (req: Request, res: Response) =>
      res.redirect(`${prefix}/cars/all`)
    );

    this._router.get(`${prefix}/cars/all`, (req, res) => {
      res.json(new ResponseService(res).sendSuccess(cars));
    });

    this._router.get(`${prefix}/cars/:id`, (req, res) => {
      const car = cars.find((car) => car.id === Number(req.params.id));
      res.json(new ResponseService(res).sendSuccess(car));
    });

    this._app.use(json());
    this._app.use(this._router);
  }

  private createHttpServer(): http.Server {
    const server = http.createServer(this._app);
    server.on('error', (e) => this.onError(e));
    server.on('listening', () => this.onListening());
    server.listen(this._port);

    return server;
  }

  private onError(error: ErrnoException) {
    if (error.syscall !== 'listen') throw error;

    switch (error.code) {
      case 'EACCES':
        console.error(this.getBind() + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`Port ${this._port} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  private onListening() {
    console.info('Listening on ' + this.getBind());
  }

  private getBind() {
    const addr: string | AddressInfo | null = this._httpServer.address();
    return typeof addr === 'string'
      ? `pipe ${addr}`
      : `http://localhost:${addr ? addr.port : this._port}`;
  }

  //endregion

  //endregion
}
