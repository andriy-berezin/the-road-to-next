import { ThemeProvider as BaseThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BaseThemeProvider attribute="class">
            {children}
        </BaseThemeProvider>
    );
}

export { ThemeProvider };