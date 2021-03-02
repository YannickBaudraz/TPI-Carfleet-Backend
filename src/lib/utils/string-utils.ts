/*
 * Description  :   [ADD DESCRIPTION]
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   tpicarfleet_backend - string-utils.ts
 *
 * Created      :   17.02.2021
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

/**
 * Utility class for manipulate strings.
 */
export class StringUtils {
  /**
   * Remove the underscore at the beginning of the string if it exists.
   * Can be useful when have private property with the '_property' pattern.
   *
   * @param str - The string to modify
   *
   * @return The modified string if leading underscore, otherwise, it's the
   * string passed by parameter.
   */
  static removeLeadingUnderscore(str: string): string {
    return str.charAt(0) === '_' ? `${str}`.slice(1) : str;
  }
}
