/*
 * Description  :   Class that send a response in a developer friendly language
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - JSONResponse.ts
 *
 * Created      :   17.02.2021 - Create to send Ok, created and error response.
 *
 * Updates      :   06.03.2021
 *                      Remove unused error response.
 *
 * Created with WebStorm.
 */

import { Response } from 'express-serve-static-core';
import { HttpStatusCode } from '../../../lib/enums/http-status-code';
import { BackendResponseBody } from '../interfaces';

/**
 * This class simplifies the way to send response in Json format.
 */
export class ResponseService {
  //region Constructor
  /**
   * Instantiate with a HTTP response.
   *
   * @param _res - The HTTP response
   */
  constructor(private _res: Response) {}
  //endregion

  //region Methods
  /**
   * Send a basic success response.
   *
   * @param data - The data to send
   * @param message - The attached message
   *
   * @return The Response with custom JSON body
   */
  sendOk(data?: unknown, message?: string): Response<BackendResponseBody> {
    return this._res.status(HttpStatusCode.OK).json({
      code: HttpStatusCode.OK,
      message: message || 'Success',
      data: data,
    });
  }

  /**
   * Send a created success response.
   *
   * @param data - The data created to re-send to the client
   * @param message - The attache message
   *
   * @return The response with custom JSON body
   */
  sendCreated(data?: unknown, message?: string): Response<BackendResponseBody> {
    return this._res.status(HttpStatusCode.CREATED).json({
      code: HttpStatusCode.OK,
      message: message || 'Success',
      data: data,
    });
  }
  //endregion
}
