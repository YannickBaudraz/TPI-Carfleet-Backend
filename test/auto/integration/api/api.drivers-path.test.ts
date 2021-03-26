import { suite, test } from '@testdeck/jest';
import { DriverDto } from '../../../../src/carfleet/models/dtos/driver.dto';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { DriversTestFactory } from '../../factories/drivers-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';
import request = require('supertest');

@suite('Test api requests with api/drivers/ paths')
class ApiDriversPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.API_PREFIX += '/drivers';
  }

  @test('when using root, should return all drivers and a 200/ok status response')
  async getAllDrivers() {
    /*
     * Given
     */
    const expectedDriver = DriversTestFactory.createFullDriverDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.API_PREFIX}`);

    /*
     * Then
     */
    expect(response.ok).toBeTruthy();

    const actualDrivers = (response.body as BackendResponse).data as DriverDto[];
    expect(actualDrivers.length).toEqual(3);
    expect(actualDrivers[1]).toEqual(expectedDriver);
  }
}
