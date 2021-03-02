/*
 * Description  :   Class that send a response in a developer friendly language
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - JSONResponse.ts
 *
 * Created      :   17.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { Response } from 'express-serve-static-core';
import { HttpStatusCode } from '../../../lib/http-status-code';
import { BackendResponseBody } from '../interfaces/backend-response-body';

/**
 * This class simplifies the way to send response in Json format.
 */
export class ResponseService {
  /**
   * Instantiate with a HTTP response.
   *
   * @param res - The HTTP response
   */
  constructor(private res: Response) {}

  /**
   * Send a basic success response.
   *
   * @param data - The data to send
   * @param message - The attached message
   *
   * @return The Response with custom JSON body
   */
  sendOk(data?: unknown, message?: string): Response<BackendResponseBody> {
    return this.res.status(HttpStatusCode.OK).json({
      code: HttpStatusCode.OK,
      message: message || 'success',
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
    return this.res.status(HttpStatusCode.CREATED).json({
      code: HttpStatusCode.OK,
      message: message || 'success',
      data: data,
    });
  }

  /**
   * Send an internal server error.
   *
   * @param message - The attached message
   *
   * @return The response with custom JSON body
   */
  sendServerError(message?: string): Response<BackendResponseBody> {
    return this.res.status(HttpStatusCode.SERVER_ERROR).json({
      code: HttpStatusCode.SERVER_ERROR,
      message: message || 'internal server error',
    });
  }
}
