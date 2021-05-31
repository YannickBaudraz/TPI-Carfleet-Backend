/*
 * Description  :   Utility class to work with boolean.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - boolean.utils.ts
 *
 * Created      :   19.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

/**
 * This class
 */
export class BooleanUtils {
  //region Constructor
  // noinspection JSUnusedLocalSymbols
  private constructor() {}
  //endregion

  /**
   * Convert a string into a boolean.
   * Notes : only 'true' will return a true boolean.
   *
   * @param str - The string to convert.
   *
   * @return The boolean value of the string.
   *
   * @example
   * // return true
   * tRue, TRUE, True, true
   */
  static stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true';
  }
}
