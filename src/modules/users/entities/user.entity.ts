import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { ROLES } from '../../../core/constants';
import { BaseEntity } from '../../../models';
import { IUser } from '../interfaces';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
}
