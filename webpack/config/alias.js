import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '@api': join(rootDir, '/src/api'),
    '@layout': join(rootDir, '/src/layout'),
    '@pages': join(rootDir, '/src/pages'),
    '@shared': join(rootDir, '/src/shared'),
    '@store': join(rootDir, '/src/store'),
    '@widgets': join(rootDir, '/src/widgets'),
};
