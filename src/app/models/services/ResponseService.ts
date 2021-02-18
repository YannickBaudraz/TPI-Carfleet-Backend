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
import { HTTPStatusCode } from '../../../lib/HTTPStatusCode';
import { BackendResponseBody } from '../interfaces/BackendResponseBody';

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
   * Send a success response.
   *
   * @param data - The data to send
   * @param message - The attached message
   *
   * @return The Response with custom JSON
   */
  sendSuccess(data?: unknown, message?: string): Response<BackendResponseBody> {
    return this.res.status(HTTPStatusCode.OK).json({
      code: HTTPStatusCode.OK,
      message: message || 'success',
      data: data,
    });
  }

  /**
   * Send an internal server error.
   *
   * @param message - The attached message
   *
   * @return The response with custom JSON
   */
  sendServerError(message?: string): Response<BackendResponseBody> {
    return this.res.status(HTTPStatusCode.SERVER_ERROR).json({
      code: HTTPStatusCode.SERVER_ERROR,
      message: message || 'internal server error',
    });
  }
}
