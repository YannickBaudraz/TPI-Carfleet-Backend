/*
 * Description  :   Controller for users.
 *
 * Author       :   Yannick.BAUDRAZ@cpnv.ch
 *
 * Project      :   TPICarfleet_Backend - user.controller.ts
 *
 * Created      :   25.05.2021
 *
 * Created with WebStorm.
 */

import { Response } from 'express';
import { Body, Get, JsonController, Param, Post, Put, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateResult } from 'typeorm';
import { CarFleetConstants } from '../application/car-fleet.constants';
import { UserDto } from '../models/dtos';
import { BackendResponse } from '../models/interfaces';
import { ResponseService } from '../services';
import { UserService } from '../services/user.service';
import { AbstractController } from './index';

/**
 * This class is the controller for users.
 */
@Service()
@JsonController(CarFleetConstants.USERS_API_PATH)
export class UserController extends AbstractController {
  /**
   * Create an user controller.
   */
  constructor(private readonly _userService: UserService) {
    super();
  }

  /**
   * Get all users.
   *
   * @param res - The HTTP response
   *
   * @return A promise with the HTTP response
   */
  @Get('/all')
  async all(@Res() res: Response): Promise<Response<BackendResponse>> {
    const userDtos = await this._userService.getAll();

    return new ResponseService(res).sendOk(userDtos);
  }

  /**
   * Get one user.
   *
   * @param res - The HTTP response
   * @param id - The unique identifier
   *
   * @return A promise with the HTTP response
   */
  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: number): Promise<Response<BackendResponse>> {
    const userDto: UserDto | undefined = await this._userService.getById(id);

    return userDto ? new ResponseService(res).sendOk(userDto) : new ResponseService(res).sendOk(null, 'No user found');
  }

  /**
   * Save an user.
   *
   * @param res - The HTTP response
   * @param userDto - The user object passed by method POST
   *
   * @return A promise with the HTTP response
   */
  @Post('/save')
  async saveOne(@Res() res: Response, @Body() userDto: UserDto): Promise<Response<BackendResponse>> {
    userDto = await this._userService.create(userDto);

    return new ResponseService(res).sendCreated(userDto, 'User created with success');
  }

  /**
   * Update an user
   *
   * @param res - The HTTP response
   * @param userDto - The user to update
   *
   * @return A promise with the HTTP response
   */
  @Put('/update')
  async updateOne(@Res() res: Response, @Body() userDto: UserDto): Promise<Response<BackendResponse>> {
    const updateResult: UpdateResult = await this._userService.update(userDto);

    return updateResult.affected
      ? new ResponseService(res).sendOk(userDto, 'Vehicle edited')
      : new ResponseService(res).sendOk(undefined, 'Could not edit');
  }
}
