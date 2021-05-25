/*
 * Description  :   Integration tests for companies api paths.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - api.companies-path.test.ts
 *
 * Created      :   07.05.2021
 *                      Create tests for :
 *                          - GET all companies
 *                          - GET one company
 *
 * Created with WebStorm.
 */

import { suite, test } from '@testdeck/jest';
import request from 'supertest';
import { CompanyDto } from '../../../../src/carfleet/models/dtos/company.dto';
import { BackendResponse } from '../../../../src/carfleet/models/interfaces';
import { HttpStatusCode } from '../../../../src/lib/enums/http-status-code';
import { CompaniesTestFactory } from '../../factories/companies-test.factory';
import { AbstractConnectedApiTest } from './abstract/abstract-connected.api.test';

@suite('Test api requests with api/companies paths')
class ApiCompaniesPathTest extends AbstractConnectedApiTest {
  constructor() {
    super();
    this.CONTROLLER_PATH += '/companies';
  }

  @test('when using GET /all, should return all companies and a 200/ok status response.')
  async getAllCompanies() {
    /*
     * Given
     */
    const expectedCompany = CompaniesTestFactory.createFullCompanyDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/all`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualCompanies = (response.body as BackendResponse).data as CompanyDto[];
    expect(actualCompanies.length).toEqual(2);
    expect(actualCompanies[0]).toEqual(expectedCompany);
  }

  @test('when using GET /:id, should return a company corresponding the id and 200/ok status response.')
  async getOneCompany() {
    /*
     * Given
     */
    const expectedId = 1;
    const expectedCompany = CompaniesTestFactory.createFullCompanyDto();

    /*
     * When
     */
    const response: request.Response = await request(this.express).get(`${this.CONTROLLER_PATH}/${expectedId}`);

    /*
     * Then
     */
    expect(response.status).toEqual(HttpStatusCode.OK);

    const actualCompany = (response.body as BackendResponse).data as CompanyDto;
    expect(actualCompany).toEqual(expectedCompany);
  }
}
