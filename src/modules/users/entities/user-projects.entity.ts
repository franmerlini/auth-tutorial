import { Column, Entity, ManyToOne } from 'typeorm';
import { AccessLevels } from '../../../enums';
import { BaseEntity } from '../../../models';
import { Project } from '../../../modules/projects/entities';
import { User } from './user.entity';

@Entity({ name: 'user_projects' })
export class UserProjects extends BaseEntity {
  @Column({ type: 'enum', enum: AccessLevels })
  accessLevel: AccessLevels;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  @ManyToOne(() => Project, (project) => project.users)
  project: Project;
}
