import { Controller, Res, HttpStatus } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser(@Res() response: Response) {
    try {
      const userData = await this.userService.getAllUser();
      return response.status(HttpStatus.OK).json({
        message: 'User data not found',
        userData,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error get all user',
        error: 'Bad Request',
      });
    }
  }

  @Post('create')
  async createUser(
    @Res() response: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        newUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error user not created',
        error: 'Bad Request',
      });
    }
  }

  @Put(':id/update')
  async updateUser(
    @Res() response: Response,
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const updateUser = await this.userService.updateUser(
        userId,
        updateUserDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'User has been updated successfully',
        updateUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error user not updated',
        error: 'Bad Request',
      });
    }
  }

  @Delete(':id/delete')
  async deleteUser(@Res() response: Response, @Param('id') userId: string) {
    try {
      const deleteUser = await this.userService.deleteUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User has been deleted successfully',
        deleteUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error user not deleted',
        error: 'Bad Request',
      });
    }
  }
}
