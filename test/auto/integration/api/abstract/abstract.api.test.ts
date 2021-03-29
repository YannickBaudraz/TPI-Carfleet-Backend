import { config } from 'dotenv';
import e from 'express';
import { CarFleetApplication } from '../../../../../src/carfleet/application/car-fleet.application';

/* eslint-disable jsdoc/require-jsdoc,@typescript-eslint/explicit-module-boundary-types */

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractApiTest {
  protected CONTROLLER_PATH = '/api';
  protected express!: e.Application;

  protected static before() {
    config({ path: `config/env/.env.${process.env.NODE_ENV}` });
  }

  protected async before() {
    this.express = new CarFleetApplication().expressApplication;
  }
}
