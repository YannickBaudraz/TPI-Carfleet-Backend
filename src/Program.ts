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

import { Router } from 'express';
import { Server } from './app/server/Server';
import express = require('express');

/**
 * This class is the application entry point.
 */
export class Program {
  private static _instance: Program;

  private constructor() {}

  /**
   * Entry point method.
   */
  public static main(): void {
    if (!this._instance) {
      this._instance = new Program();

      Server.init(express(), Router(), 3000);
    }
  }
}

Program.main();
