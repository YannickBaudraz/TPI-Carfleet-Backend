import { suite, test } from '@testdeck/jest';
import { VehicleDto } from '../../../../src/carfleet/models/dtos';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { HttpStatusCode } from '../../../../src/lib/enums/http-status-code';
import { VehiclesTestFactory } from '../../factories/vehicles-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';
import request = require('supertest');

@suite('Test api requests with api/vehicles paths')
class ApiVehiclesPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.CONTROLLER_PATH += '/vehicles';
  }

  @test('when using GET /all, should return all vehicles and a 200/ok status response')
  async getAllVehicles() {
    /*
     * Given
     */
    const expectedVehicle = VehiclesTestFactory.createFullVehicleDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/all`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualVehicles = (response.body as BackendResponse).data as VehicleDto[];
    expect(actualVehicles.length).toBeGreaterThan(1);
    expect(actualVehicles[1]).toEqual(expectedVehicle);
  }

  @test('when using GET /:id, should return a vehicle corresponding the id and 200/ok status response.')
  async getOneVehicleById() {
    /*
     * Given
     */
    const expectedReqId = 2;
    const expectedVehicle = VehiclesTestFactory.createFullVehicleDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/${expectedReqId}`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualVehicle = (response.body as BackendResponse).data as VehicleDto;
    expect(actualVehicle).toEqual(expectedVehicle);
  }
}
