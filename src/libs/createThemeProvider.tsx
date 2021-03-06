import * as React from 'react';

export type ThemeProviderType<T> = React.ComponentType<{
    children: React.ReactNode,
    theme?: T,
}>;

function createThemeProvider<T>(
    defaultTheme: T,
    ThemeContext: React.Context<T>
): ThemeProviderType<T> {

    const ThemeProvider : React.FunctionComponent<any> = ({theme, children}) => {
        return (
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        );
    }

    return ThemeProvider;
}

export default createThemeProvider;
