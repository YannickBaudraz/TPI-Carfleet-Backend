/*
 * Description  :   Abstract class for controllers.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - abstract.controller.ts
 *
 * Created      :   07.05.2021
 *
 * Created with WebStorm.
 */

import { Request, Response } from 'express';
import { Get, Req, Res } from 'routing-controllers';
import { BackendResponse } from '../models/interfaces';

/**
 * This abstract class is designed to be the parent of controllers.
 */
export abstract class AbstractController {
  //region Methods
  //region Public methods
  /**
   * Redirect to '/all'.
   *
   * @param req - The HTTP request with
   * @param res - The HTTP response to redirect with
   *
   * @return A promise with the HTTP response
   */
  @Get()
  async base(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const urlSuffix = req.url.slice(-1) === '/' ? 'all' : '/all';
    res.redirect(req.url + urlSuffix);

    return res;
  }
  //endregion

  //region Abstract methods
  /**
   * Get all DTOs.
   *
   * @param res - The HTTP response
   *
   * @return A promise with the HTTP response
   */
  abstract all(res: Response): Promise<Response<BackendResponse>>;

  /**
   * Get one DTO.
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP response
   */
  abstract getOne(res: Response, id: number): Promise<Response<BackendResponse>>;
  //endregion
  //endregion
}
