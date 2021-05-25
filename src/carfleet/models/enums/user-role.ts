/*
 * Description  :   Enumerator for user roles.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user-role.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

/**
 * Enum for user roles.
 */
export enum UserRole {
  /**
   * Admin.
   */
  Admin = 'admin',

  /**
   * Editor.
   */
  Editor = 'editeur',

  /**
   * Donator.
   */
  Donator = 'donator',

  /**
   * Reader.
   */
  Reader = 'reader',
}
