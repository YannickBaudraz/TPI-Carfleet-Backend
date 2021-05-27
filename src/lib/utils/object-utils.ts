/*
 * Description  :   Utility for objects.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - objects.utils.ts
 *
 * Created      :   08.03.2021 - Create with nullToUndefinedProperties
 *
 * Updates      :   [update date]
 *                      [update description
 *
 * Created with WebStorm.
 */

/**
 * This class is an utility for objects.
 */
export class ObjectUtils {
  //region Constructor
  // noinspection JSUnusedLocalSymbols
  private constructor() {}
  //endregion

  //region Methods
  /**
   * Transform all null properties of an object to {@link undefined}. It do recursively.
   *
   * @param obj - The object with his properties
   *
   * @return The same object with properties undefined
   *
   * @see https://stackoverflow.com/a/60085326
   */
  static nullToUndefinedProperties<T>(obj: T): T | undefined {
    if (obj === null) return undefined;
    if (typeof obj !== 'object') return obj;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = this.nullToUndefinedProperties(obj[key]) as T[Extract<never, never>];
      }
    }

    return obj;
  }

  /**
   * Transform all null properties of an object to {@link undefined}. It do recursively.
   *
   * @param obj - The object with his properties
   *
   * @return The same object with properties undefined
   */
  static undefinedToNullProperties<T>(obj: T): T | undefined {
    if (obj === null) return undefined;
    if (typeof obj !== 'object') return obj;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = this.nullToUndefinedProperties(obj[key]) as T[Extract<never, never>];
      }
    }

    return obj;
  }

  /**
   * Transform all properties that have a blank string to null. IT do recursively.
   *
   * @param obj - The object with its properties
   *
   * @return The same object with properties null
   */
  static blankStringToNullProperties<T>(obj: T): T | null {
    if (typeof obj === 'string' && obj === '') return null;
    if (typeof obj !== 'object') return obj;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = this.blankStringToNullProperties(obj[key]) as T[Extract<never, never>];
      }
    }

    return obj;
  }
  //endregion
}
