/*
 * Description  :   Enum for Http status
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - HTTPResponseCode.ts
 *
 * Created      :   16.02.2021 - Create with OK, CREATED and SERVER_ERROR
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

/**
 * This enum represents HTTP status codes.
 *
 * @see https://tools.ietf.org/html/rfc7231#section-6
 */
export enum HttpStatusCode {
  //region Successful 2xx
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
   * The 201 (Created) status code indicates that the request has been
   * fulfilled and has resulted in one or more new resources being
   * created.  The primary resource created by the request is identified
   * by either a Location header field in the response or, if no Location
   * field is received, by the effective request URI.
   *
   * The 201 response payload typically describes and links to the
   * resource(s) created.  See Section 7.2 for a discussion of the meaning
   * and purpose of validator header fields, such as ETag and
   * Last-Modified, in a 201 response.
   *
   * @see https://tools.ietf.org/html/rfc7231#section-6.3.2
   */
  CREATED = 201,
  //endregion

  //region Redirection 3xx
  /**
   * The 302 (Found) status code indicates that the target resource
   * resides temporarily under a different URI.  Since the redirection
   * might be altered on occasion, the client ought to continue to use the
   * effective request URI for future requests.
   *
   * The server SHOULD generate a Location header field in the response
   * containing a URI reference for the different URI.  The user agent MAY
   * use the Location field value for automatic redirection.  The server's
   * response payload usually contains a short hypertext note with a
   * hyperlink to the different URI(s).
   *
   *  Note: For historical reasons, a user agent MAY change the request
   *  method from POST to GET for the subsequent request.  If this
   *  behavior is undesired, the 307 (Temporary Redirect) status code
   *  can be used instead.
   *
   *  @see https://tools.ietf.org/html/rfc7231#section-6.4.3
   */
  FOUND = 302,
  //endregion

  //region Client Error 4xx
  /**
   * The 404 (Not Found) status code indicates that the origin server did
   * not find a current representation for the target resource or is not
   * willing to disclose that one exists.  A 404 status code does not
   * indicate whether this lack of representation is temporary or
   * permanent; the 410 (Gone) status code is preferred over 404 if the
   * origin server knows, presumably through some configurable means, that
   * the condition is likely to be permanent.
   *
   * A 404 response is cacheable by default; i.e., unless otherwise
   * indicated by the method definition or explicit cache controls.
   *
   * @see https://tools.ietf.org/html/rfc7231#section-6.5.4
   */
  NOT_FOUND = 404,
  //endregion

  //region Server Error 5xx
  /**
   * The 500 (Internal Server Error) status code indicates that the server
   * encountered an unexpected condition that prevented it from fulfilling
   * the request.
   *
   * @see https://tools.ietf.org/html/rfc7231#section-6.6.1
   */
  SERVER_ERROR = 500,
  //endregion
}
