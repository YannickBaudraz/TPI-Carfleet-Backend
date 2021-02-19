/*
 * Description  :   Custom response body.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - BackendResponseBody.ts
 *
 * Created      :   17.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { HTTPStatusCode } from '../../../lib/HTTPStatusCode';
import { SerializableDto } from '../dtos/SerializableDto';

/**
 * This interface represents a custom response body.
 */
export interface BackendResponseBody {
  code: HTTPStatusCode;
  message: string;
  data: SerializableDto;
}
