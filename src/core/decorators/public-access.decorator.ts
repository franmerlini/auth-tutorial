import { SetMetadata } from '@nestjs/common';
import { DECORATORS_KEYS } from 'src/core/constants';

export const PublicAccess = () => SetMetadata(DECORATORS_KEYS.PUBLIC, true);
