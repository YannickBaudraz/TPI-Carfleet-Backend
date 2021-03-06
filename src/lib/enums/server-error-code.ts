/*
 * Description  :   Enum for common system errors
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - server-error-code.ts
 *
 * Created      :   18.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

/**
 * This enum represents system common errors. This is system errors
 * commonly-encountered when writing a Node.js program.
 *
 * @see https://nodejs.org/api/errors.html#errors_common_system_errors
 */
export enum ServerErrorCode {
  /**
   * (Permission denied): An attempt was made to access a file in a way
   * forbidden by its file access permissions.
   */
  EACCES = 'EACCES',

  /**
   * (Address already in use): An attempt to bind a server (net, http, or
   * https) to a local address failed due to another server on the local system
   * already occupying that address.
   */
  EADDRINUSE = 'EADDRINUSE',
}
