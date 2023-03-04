import { Column, Entity, OneToMany } from 'typeorm';
import { Roles } from '../../../enums';
import { BaseEntity } from '../../../models';
import { IUser } from '../interfaces';
import { UserProjects } from './user-projects.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Roles })
  role: Roles;

  @OneToMany(() => UserProjects, (userProjects) => userProjects.user)
  projects: UserProjects[];
}
