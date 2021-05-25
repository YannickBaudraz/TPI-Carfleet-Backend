import { suite, test } from '@testdeck/jest';
import request from 'supertest';
import { UserDto } from '../../../../src/carfleet/models/dtos';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { HttpStatusCode } from '../../../../src/lib/enums/http-status-code';
import { UsersTestFactory } from '../../factories/users-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';

@suite('Test api requests with api/users paths')
class ApiUsersPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.CONTROLLER_PATH += '/users';
  }

  @test('when using GET /all, should return all users and a 200/ok status.')
  async getAllUsers() {
    /*
     * Given
     */
    const expectedUser = UsersTestFactory.createFullUserDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/all`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualUsers = (response.body as BackendResponse).data as UserDto[];
    expect(actualUsers.length).toEqual(12);
    expect(actualUsers[0]).toEqual(expectedUser);
  }

  @test('when using GET /:id, should return an user corresponding the id and 200/ok status.')
  async getOneUser() {
    /*
     * Given
     */
    const expectedReqId = 1;
    const expectedUser = UsersTestFactory.createFullUserDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/${expectedReqId}`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualUser = (response.body as BackendResponse).data as UserDto;
    expect(actualUser).toEqual(expectedUser);
  }

  @test('when using POST /save, should return same object than given with his new ID and 201/created status.')
  async SaveOneUser() {
    /*
     * Given
     */
    const userSent = UsersTestFactory.createNonExistentUser();
    // The user has an id of #0 when sent
    const expectedUserId = 13;

    /*
     * When
     */
    const response = await request(this.express).post(`${this.CONTROLLER_PATH}/save`).send(userSent);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.CREATED);

    const actualUser = (response.body as BackendResponse).data as UserDto;
    // The user has an id of #13 when received
    expect(actualUser.id).toEqual(expectedUserId);

    // Checking the user is now existing in the dtb
    await request(this.express)
      .get(`${this.CONTROLLER_PATH}/${actualUser.id}`)
      .then((response: request.Response) => {
        expect((response.body as BackendResponse).data as UserDto).toEqual(actualUser);
      });
  }

  @test('when using PUT /update, should return same object than given and 200/ok status.')
  async updateOneUser() {
    /*
     * Given
     */
    const userSent = UsersTestFactory.createFullUserDto();

    /*
     * When
     */
    const response = await request(this.express).put(`${this.CONTROLLER_PATH}/update`).send(userSent);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualUser = (response.body as BackendResponse).data as UserDto;
    expect(actualUser).toEqual(userSent);

    // Checking the user is now existing in the dtb
    await request(this.express)
      .get(`${this.CONTROLLER_PATH}/${actualUser.id}`)
      .then((response: request.Response) => {
        expect((response.body as BackendResponse).data as UserDto).toEqual(actualUser);
      });
  }
}
