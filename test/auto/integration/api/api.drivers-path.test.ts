import { suite, test } from '@testdeck/jest';
import request from 'supertest';
import { DriverDto } from '../../../../src/carfleet/models/dtos/driver.dto';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { HttpStatusCode } from '../../../../src/lib/enums/http-status-code';
import { DriversTestFactory } from '../../factories/drivers-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';

@suite('Test api requests with api/drivers paths')
class ApiDriversPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.CONTROLLER_PATH += '/drivers';
  }

  @test('when using GET /all, should return all drivers and a 200/ok status response.')
  async getAllDrivers() {
    /*
     * Given
     */
    const expectedDriver = DriversTestFactory.createFullDriverDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/all`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualDrivers = (response.body as BackendResponse).data as DriverDto[];
    expect(actualDrivers.length).toEqual(3);
    expect(actualDrivers[1]).toEqual(expectedDriver);
  }

  @test('when using GET /:id, should return a driver corresponding the id and 200/ok status response.')
  async getOneDriver() {
    /*
     * Given
     */
    const expectedReqId = 2;
    const expectedDriver = DriversTestFactory.createFullDriverDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/${expectedReqId}`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualDriver = (response.body as BackendResponse).data as DriverDto;
    expect(actualDriver).toEqual(expectedDriver);
  }
}
