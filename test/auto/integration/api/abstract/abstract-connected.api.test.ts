import { test } from '@testdeck/jest';
import request from 'supertest';
import { getConnection } from 'typeorm';
import { HttpStatusCode } from '../../../../../src/lib/enums/http-status-code';
import { TestDatabaseHelper } from '../../../helpers/database-test.helper';
import { AbstractApiTest } from './abstract.api.test';

/* eslint-disable jsdoc/require-jsdoc,@typescript-eslint/explicit-module-boundary-types */

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractConnectedApiTest extends AbstractApiTest {
  protected expectedRedirectLocation!: string;

  protected async before() {
    await super.before();
    await TestDatabaseHelper.prepareTestDatabase();
  }

  @test('when using GET root, should redirected to /all and returning a 302 status response.')
  async getRootPath() {
    /*
     * Given
     */
    const expectedRedirectLocation = `${this.CONTROLLER_PATH}/all`;

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.FOUND);
    expect(response.headers.location).toEqual(expectedRedirectLocation);
  }

  protected static async after() {
    await getConnection('test').close();
  }
}
