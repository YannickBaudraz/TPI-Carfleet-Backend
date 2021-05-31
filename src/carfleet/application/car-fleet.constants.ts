/*
 * Description  :   Constants of carfleet application.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - car-fleet.constants.ts
 *
 * Created      :   27.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

/**
 * This class is a static class to use constants of the application CarFleet.
 */
export class CarFleetConstants {
  //region Fields
  /**
   * Prefix for all api paths.
   */
  static readonly PREFIX_API_PATH = '/api';

  /**
   * Api path for vehicles.
   */
  static readonly VEHICLES_API_PATH = '/vehicles';

  /**
   * Api path for drivers.
   */
  static readonly DRIVERS_API_PATH = '/drivers';

  /**
   * Api path for companies.
   */
  static readonly COMPANIES_API_PATH = '/companies';

  /**
   * Api path for users.
   */
  static readonly USERS_API_PATH = '/users';
  //endregion

  //region Constructor
  // noinspection JSUnusedLocalSymbols
  private constructor() {}
  //endregion
}
