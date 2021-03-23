import { TestDatabaseHelper } from '../../../helpers/database-test.helper';
import { AbstractApiTest } from './abstract.api.test';

/* eslint-disable jsdoc/require-jsdoc,@typescript-eslint/explicit-module-boundary-types */

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractConnectedApiTest extends AbstractApiTest {
  protected async before() {
    await super.before();
    await TestDatabaseHelper.prepareTestDatabase();
  }
}
