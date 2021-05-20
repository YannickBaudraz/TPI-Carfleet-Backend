/*
 * Description  :   Service for companies.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - company.service.ts
 *
 * Created      :   07.05.2021
 *
 * Created with WebStorm.
 */

import { Service } from 'typedi';
import { getConnectionManager } from 'typeorm';
import { DatabaseConnector } from '../models/database';
import { CompanyEntity } from '../models/database/entities';
import { CompanyRepository } from '../models/database/repositories/company.repository';
import { CompanyDto } from '../models/dtos/company.dto';
import { TransformationService } from './transformation.service';

/**
 * This class manages companies
 */
@Service()
export class CompanyService {
  //region Fields
  private _companyRepository!: CompanyRepository;
  private _databaseConnector: DatabaseConnector;
  //endregion

  //region Constructor
  /**
   * Create an instance of driver service.
   */
  constructor(private _transformationService: TransformationService) {
    this._databaseConnector = new DatabaseConnector(getConnectionManager());
    this._databaseConnector.connect(() => {
      const connection = this._databaseConnector.connection;
      this._companyRepository = connection.getCustomRepository(CompanyRepository);
    });
  }
  //endregion

  //region Methods
  /**
   * Retrieve all companies from the database.
   *
   * @return An array of {@link CompanyDto} from the database
   */
  async getAll(): Promise<CompanyDto[]> {
    await this._databaseConnector.connectionReadyToUse;

    const companyEntities: CompanyEntity[] = await this._companyRepository.find();

    return this._transformationService.entitiesToDtos(companyEntities, CompanyDto) as CompanyDto[];
  }

  /**
   * Retrieve a company from the database.
   *
   * @param id - The unique identifier
   *
   * @return The company DTO or undefined if it was not found
   */
  async getById(id: number): Promise<CompanyDto | undefined> {
    await this._databaseConnector.connectionReadyToUse;

    const companyEntity: CompanyEntity | undefined = await this._companyRepository.findOne(id);

    return companyEntity
      ? (this._transformationService.entityToDto(companyEntity, CompanyDto) as CompanyDto)
      : undefined;
  }
}
