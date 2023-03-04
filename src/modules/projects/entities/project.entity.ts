import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../models';
import { UserProjects } from '../../../modules/users/entities';
import { IProject } from '../interfaces';

@Entity({ name: 'projects' })
export class Project extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  status: string;

  @OneToMany(() => UserProjects, (userProjects) => userProjects.project)
  users: UserProjects[];
}
