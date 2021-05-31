/*
 * Description  :   Repository of users.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user.repository.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

/**
 * This class is a repository of {@link UserEntity}.
 */
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
