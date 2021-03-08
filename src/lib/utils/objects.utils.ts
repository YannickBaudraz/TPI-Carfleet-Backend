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
export class ObjectsUtils {
  //region Constructor
  // noinspection JSUnusedLocalSymbols
  private constructor() {}
  //endregion

  //region Methods
  /**
   * Transform all null properties of an object to {@link undefined}.
   *
   * @param obj - The object with his properties
   *
   * @return The same object with the properties undefined
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  static nullToUndefinedProperties(obj: any): any {
    if (obj === null) {
      return undefined;
    }

    if (typeof obj === 'object') {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          obj[key] = this.nullToUndefinedProperties(obj[key]);
        }
      }
    }

    return obj;
  }
  //endregion
}
