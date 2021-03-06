import {useEffect, useState} from "react";
import throttle from 'lodash.throttle';
import createThemeProvider, {ThemeProviderType} from "./createThemeProvider";
import * as React from "react";

const getDeviceConfig = (width: number): string => {
    if(width < 320) {
        return 'xs';
    } else if(width >= 320 && width < 720 ) {
        return 'sm';
    } else if(width >= 720 && width < 1024) {
        return 'md';
    } else if(width >= 1024) {
        return 'lg';
    }

    return 'default';
};

const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

    useEffect(() => {
        const calcInnerWidth = throttle(function() {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
}

export function getCurrentBreakpoint(): string{
    return getDeviceConfig(window.innerWidth);
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export const EmbersThemeProvider : React.FunctionComponent = (props) => {
    const point = useBreakpoint();
    const updated = useForceUpdate();
    const defaultTheme = {};
    const ThemeContext: React.Context<any> = React.createContext(defaultTheme);

    const ThemeProvider: ThemeProviderType<any> = createThemeProvider(
        defaultTheme,
        ThemeContext
    );

    return (
        <>
            <div>asd {updated} {point} {new Date().getSeconds()}</div>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </>
    );
}

export function prepareEmbOutput( emberCSSProperties: any ): any{
    return emberCSSProperties;
}

export interface TypographyCSSComponent{
    fontSize: string;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
    textDecoration?: string;
}
