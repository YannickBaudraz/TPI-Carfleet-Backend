/*
 * Description  :   Repository of vehicle.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - vehicle.repository.ts
 *
 * Created      :   20.03.2021
 *
 * Updates      :   [update date]
 *                      [update description]
 *
 * Created with WebStorm.
 */

import { EntityRepository, Repository } from 'typeorm';
import { VehiclesEntity } from '../entities';

/**
 * This class is a repository of {@link VehiclesEntity}.
 */
@EntityRepository(VehiclesEntity)
export class VehicleRepository extends Repository<VehiclesEntity> {}
