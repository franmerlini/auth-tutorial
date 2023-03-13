import { SetMetadata } from '@nestjs/common';
import { DECORATORS_KEYS, ROLES } from 'src/core/constants';

export const AdminAccess = () => SetMetadata(DECORATORS_KEYS.ADMIN, ROLES.ADMIN);
