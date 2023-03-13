import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDTO, UserDTO } from '../dtos';
import { UserEntity } from '../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(payload: UserDTO): Promise<UserEntity> {
    try {
      payload.password = await bcrypt.hash(payload.password, +process.env.HASH_SALT);
      return await this.userRepository.save(payload);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getUsers(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getUserById(userId: string): Promise<UserEntity> {
    try {
      return await this.userRepository.createQueryBuilder('user').where({ id: userId }).getOne();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateUser(payload: UpdateUserDTO, userId: string): Promise<UpdateResult> {
    try {
      return await this.userRepository.update(userId, payload);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteUser(userId: string): Promise<DeleteResult> {
    try {
      return await this.userRepository.delete(userId);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findByKey(key: keyof UserDTO, value: any): Promise<UserEntity> {
    try {
      return await this.userRepository.findOne({ where: { [key]: value } });
    } catch (error) {
      throw new Error(error);
    }
  }
}
