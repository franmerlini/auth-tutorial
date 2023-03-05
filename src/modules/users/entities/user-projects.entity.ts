import { Column, Entity, ManyToOne } from 'typeorm';
import { AccessLevels } from '../../../enums';
import { BaseEntity } from '../../../models';
import { ProjectEntity } from '../../../modules/projects/entities';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_projects' })
export class UserProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: AccessLevels })
  accessLevel: AccessLevels;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.users)
  project: ProjectEntity;
}
