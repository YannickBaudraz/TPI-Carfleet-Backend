/*
 * Description  :   Enum class for Http status
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - HTTPResponseCode.ts
 *
 * Created      :   16.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

/**
 * This enum represents HTTP status codes.
 *
 * @see https://tools.ietf.org/html/rfc7231#section-6
 */
export enum HTTPStatusCode {
  /**
   *  The 200 (OK) status code indicates that the request has succeeded.
   * The payload sent in a 200 response depends on the request method.
   * For the methods defined by this specification, the intended meaning
   * of the payload can be summarized as:
   *
   * - GET  a representation of the target resource;
   * - HEAD  the same representation as GET, but without the representation
   * data;
   * - POST  a representation of the status of, or results obtained from,
   * the action;
   * - PUT, DELETE  a representation of the status of the action;
   * - OPTIONS  a representation of the communications options;
   * - TRACE  a representation of the request message as received by the end
   * server.
   *
   * Aside from responses to CONNECT, a 200 response always has a payload,
   * though an origin server MAY generate a payload body of zero length.
   * If no payload is desired, an origin server ought to send 204 (NoContent)
   * instead.  For CONNECT, no payload is allowed because the successful result
   * is a tunnel, which begins immediately after the 200 response header
   * section.
   *
   * @see https://tools.ietf.org/html/rfc7231#section-6.3.1
   */
  OK = 200,

  /**
   * The 500 (Internal Server Error) status code indicates that the server
   * encountered an unexpected condition that prevented it from fulfilling
   * the request.
   *
   * @see https://tools.ietf.org/html/rfc7231#section-6.6.1
   */
  SERVER_ERROR = 500,
}
