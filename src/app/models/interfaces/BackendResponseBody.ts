import { HTTPStatusCode } from '../../../lib/HTTPStatusCode';
import { SerializableDto } from '../dto/SerializableDto';

export interface BackendResponseBody {
  code: HTTPStatusCode;
  message: string;
  data: SerializableDto;
}
