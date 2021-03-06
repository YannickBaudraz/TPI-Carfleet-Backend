/*
 * Description  :   Custom response body.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - backend-response-body.ts
 *
 * Created      :   17.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

import { HttpStatusCode } from '../../../lib/enums/http-status-code';
import { SerializableDto } from '../dtos/serializable.dto';

/**
 * This interface represents a custom response body.
 */
export interface BackendResponseBody {
  code: HttpStatusCode;
  message: string;
  data: SerializableDto;
}
