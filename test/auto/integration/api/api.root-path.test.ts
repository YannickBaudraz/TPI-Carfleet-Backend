import { suite, test } from '@testdeck/jest';
import { AbstractApiTest } from './abstract/abstract.api.test';
import request = require('supertest');

@suite('Test api requests with api/ path prefix')
class ApiRootPathTest extends AbstractApiTest {
  @test('Should return response 404.')
  async index() {
    /*
     * When
     */
    const result: request.Response = await request(this.express).get(`${this.API_PREFIX}`);

    /*
     * Then
     */
    expect(result.status).toBe(404);
  }
}
