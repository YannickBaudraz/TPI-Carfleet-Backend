import { suite, test } from '@testdeck/jest';
import { VehicleDto } from '../../../../src/carfleet/models/dtos';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { VehiclesTestFactory } from '../../factories/vehicles-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';
import request = require('supertest');

@suite('Test api requests with api/vehicles/ paths')
class ApiVehiclesPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.API_PREFIX += '/vehicles';
  }

  @test('when using root, should return all vehicles and a 200/ok status response')
  async getAllVehicles() {
    /*
     * Given
     */
    const expectedVehicle = VehiclesTestFactory.createFullVehicleDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.API_PREFIX}`);

    /*
     * Then
     */
    expect(response.ok).toBeTruthy();

    const actualVehicles = (response.body as BackendResponse).data as VehicleDto[];
    expect(actualVehicles.length).toBeGreaterThan(1);
    expect(actualVehicles[1]).toEqual(expectedVehicle);
  }

  @test('when using /:id, should return a vehicle corresponding with the id and 200/ok status response.')
  async getOneVehicleById() {
    /*
     * Given
     */
    const expectedReqId = 2;
    const expectedVehicle = VehiclesTestFactory.createFullVehicleDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.API_PREFIX}/${expectedReqId}`);

    /*
     * Then
     */
    expect(response.ok).toBeTruthy();

    const actualVehicle = (response.body as BackendResponse).data as VehicleDto;
    expect(actualVehicle).toEqual(expectedVehicle);
  }
}
