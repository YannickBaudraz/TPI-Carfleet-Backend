/*
 * Description  :   Repository of companies.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - company.repository.ts
 *
 * Created      :   07.05.2021
 *
 * Created with WebStorm.
 */

import { EntityRepository, Repository } from 'typeorm';
import { CompanyEntity } from '../entities';

/**
 * This class is a repository of {@link CompanyEntity}
 */
@EntityRepository(CompanyEntity)
export class CompanyRepository extends Repository<CompanyEntity> {}
