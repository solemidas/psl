/**
 * Provides custom icon font
 */

// tslint:disable no-var-requires
// tslint:disable no-require-imports

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
const config = require('assets/fonts/capetowncity-icons.json');

export const BallClubIcon = createIconSetFromIcoMoon(config);
