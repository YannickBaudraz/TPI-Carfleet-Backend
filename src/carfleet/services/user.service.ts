/*
 * Description  :   Service for users.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user.service.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { Service } from 'typedi';
import { getConnectionManager, UpdateResult } from 'typeorm';
import { DatabaseConnector } from '../models/database';
import { UserEntity } from '../models/database/entities/user.entity';
import { UserRepository } from '../models/database/repositories';
import { UserDto } from '../models/dtos';
import { TransformationService } from './transformation.service';

/**
 * This class manages users.
 */
@Service()
export class UserService {
  //region Fields
  private _userRepository!: UserRepository;
  private _databaseConnector: DatabaseConnector;
  //endregion

  //region Constructor
  /**
   * Create an instance of user service.
   *
   * @param _transformationService - A carfleet transformation service
   */
  constructor(private _transformationService: TransformationService) {
    this._databaseConnector = new DatabaseConnector(getConnectionManager());
    this._databaseConnector.connect(() => {
      const connection = this._databaseConnector.connection;
      this._userRepository = connection.getCustomRepository(UserRepository);
    });
  }
  //endregion

  /**
   * Retrieve all users from the database.
   *
   * @return An array of {@link UserDto}
   */
  async getAll(): Promise<UserDto[]> {
    await this._databaseConnector.connectionReadyToUse;

    const userEntities: UserEntity[] = await this._userRepository.find();

    return this._transformationService.entitiesToDtos(userEntities, UserDto) as UserDto[];
  }

  /**
   * Retrieve a user from the database.
   *
   * @param id - The unique identifier
   *
   * @return The dto user or undefined if it was not found
   */
  async getById(id: number): Promise<UserDto | undefined> {
    await this._databaseConnector.connectionReadyToUse;

    const userEntity: UserEntity | undefined = await this._userRepository.findOne(id);

    return userEntity ? (this._transformationService.entityToDto(userEntity, UserDto) as UserDto) : undefined;
  }

  /**
   * Insert an user in the database.
   *
   * @param userDto
   *
   * @return The dto object with the insert id if success, otherwise it fails
   */
  async create(userDto: UserDto): Promise<UserDto> {
    let userEntity = this._transformationService.dtoToEntity(userDto, UserEntity) as UserEntity;

    await this._databaseConnector.connectionReadyToUse;

    await this._userRepository.save(userEntity).then((savedUser) => {
      this._userRepository.preload(savedUser).then((reloadedUser) => {
        userEntity = reloadedUser as UserEntity;
      });
    });

    return this._transformationService.entityToDto(userEntity, UserDto) as UserDto;
  }

  /**
   * Update an user to the database.
   *
   * @param userDto - The dto user
   *
   * @return The update result
   */
  async update(userDto: UserDto): Promise<UpdateResult> {
    await this._databaseConnector.connectionReadyToUse;

    const partialEntity = this._transformationService.dtoToEntity(userDto, UserEntity);
    const updateResult = await this._userRepository.update(userDto.id, partialEntity);
    return updateResult;
  }
}
