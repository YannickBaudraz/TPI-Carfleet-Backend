/*
 * Description  :   Enumerator for user status.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user-status.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

/**
 * Enum for user status.
 */
export enum UserStatus {
  /**
   * Pending.
   */
  Pending = 'en attendant',

  /**
   * Active.
   */
  Active = 'actif',

  /**
   * Suspended.
   */
  Suspended = 'suspendu',
}
