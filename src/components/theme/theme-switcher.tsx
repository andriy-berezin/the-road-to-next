'use client';

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
            {isDark ? '🌜' : '🌞'}
        </button>
    );
}
export default ThemeSwitcher;