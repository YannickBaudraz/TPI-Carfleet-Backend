/*
 * Description  :   Repository of drivers.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - DriverRepository.ts
 *
 * Created      :   25.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { EntityRepository, Repository } from 'typeorm';
import { DriverEntity } from '../entities';

/**
 * This class is a repository of {@link DriverEntity}.
 */
@EntityRepository(DriverEntity)
export class DriverRepository extends Repository<DriverEntity> {}
