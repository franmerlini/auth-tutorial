import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany } from 'typeorm';
import { Roles } from '../../../enums';
import { BaseEntity } from '../../../models';
import { IUser } from '../interfaces';
import { UserProjectsEntity } from './user-projects.entity';

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

  @Column({ type: 'enum', enum: Roles })
  role: Roles;

  @OneToMany(() => UserProjectsEntity, (userProjects) => userProjects.user)
  projects: UserProjectsEntity[];
}
