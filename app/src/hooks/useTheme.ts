'use client'

import _default from '../themes/default';

export type ThemeObject = typeof _default;

const useTheme = (): ThemeObject => window.theme_object;

export default useTheme;