import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PublicAccess } from 'src/decorators';
import { AuthGuard } from 'src/modules/auth/guards';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDTO, UserDTO } from '../dtos';
import { UserService } from '../services';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public async getUsers(): Promise<UserDTO[]> {
    try {
      const users = await this.userService.getUsers();
      if (users.length === 0) throw new BadRequestException('No se encontraron usuarios.');
      return users;
    } catch (error) {
      throw error;
    }
  }

  @Post('register')
  public async registerUser(@Body() payload: UserDTO): Promise<UserDTO> {
    try {
      const user = await this.userService.createUser(payload);
      if (!user) throw new BadRequestException('No se pudo registrar el usuario.');
      return user;
    } catch (error) {
      throw error;
    }
  }

  @PublicAccess()
  @Get(':id')
  public async getUserById(@Param('id') userId: string): Promise<UserDTO> {
    try {
      const user = await this.userService.getUserById(userId);
      if (!user) throw new BadRequestException('Usuario no encontrado.');
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Put('edit/:id')
  public async updateUser(@Param('id') userId: string, @Body() payload: UpdateUserDTO): Promise<UpdateResult> {
    try {
      const result = await this.userService.updateUser(payload, userId);
      if (result.affected === 0) throw new BadRequestException('Usuario no encontrado.');
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete/:id')
  public async deleteUser(@Param('id') userId: string): Promise<DeleteResult> {
    try {
      const result = await this.userService.deleteUser(userId);
      if (result.affected === 0) throw new BadRequestException('Usuario no encontrado.');
      return result;
    } catch (error) {
      throw error;
    }
  }
}
