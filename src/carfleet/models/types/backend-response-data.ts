/*
 * Description  :   Type that define data object send by the api.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - back-end-response-data.ts
 *
 * Created      :   19.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */
import { AbstractSerializableDto } from '../dtos/abstract-serializable.dto';

export type BackendResponseData = AbstractSerializableDto[] | AbstractSerializableDto | null;
