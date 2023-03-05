import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../models';
import { UserProjectsEntity } from '../../../modules/users/entities';
import { IProject } from '../interfaces';

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity implements IProject {
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

  @OneToMany(() => UserProjectsEntity, (userProjects) => userProjects.project)
  users: UserProjectsEntity[];
}
