import {PropsWithChildren, useContext, useEffect, useState} from "react";
import throttle from 'lodash.throttle';
import createThemeProvider, {ThemeProviderType} from "./createThemeProvider";
import * as React from "react";

const getDeviceConfig = (width: number, sizes: any, asIndex?: boolean): string | number => {

    let breakPointName = '';
    let breakPointIndex = -1;

    for(let i = 0; i < sizes.length; i++){
        const size = sizes[i][0];
        breakPointName = sizes[i][1];
        breakPointIndex = i;

        if(i===0 && width < size) return asIndex?breakPointIndex:breakPointName;
        else if(i>0 && i < sizes.length-1 && width >= sizes[i-1][0] && width < sizes[i+1][0] ) return asIndex?breakPointIndex:breakPointName;
        else if(i === sizes.length-1 && width >= size ) return asIndex?breakPointIndex:breakPointName;
    }

    return asIndex?breakPointIndex:breakPointName;
};

const useBreakpoint = ( sizes: any ) => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth, sizes));

    useEffect(() => {
        const calcInnerWidth = throttle(function() {
            setBrkPnt(getDeviceConfig(window.innerWidth, sizes))
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
}

export function getCurrentBreakpoint(sizes: any): string{
    return String(getDeviceConfig(window.innerWidth, sizes));
}

export function getCurrentBreakpointIndex(sizes: any): number{
    return Number(getDeviceConfig(window.innerWidth, sizes, true));
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

interface ThemeProviderProps extends PropsWithChildren<{}>{
    theme: string
}

export function createTheme(themes: any){
    const defaultTheme = themes.default;
    const ThemeContext: React.Context<any> = React.createContext(defaultTheme);

    console.log('asdasdsadasd', themes);

    const EmbersThemeProvider : React.FunctionComponent<ThemeProviderProps> = (props) => {
        const point = useBreakpoint(themes[props.theme].sizes);
        const ThemeProvider: ThemeProviderType<any> = createThemeProvider(
            defaultTheme,
            ThemeContext
        );

        return (
            <>
                <ThemeProvider>
                    {props.children}
                </ThemeProvider>
            </>
        );
    }

    const useTheme = () => {
        const theme = React.useContext(ThemeContext);
        return theme;
    }

    return {
        EmbersThemeProvider,
        ThemeContext,
        useTheme
    }
}

const colorProperties = ['color', 'backgroundColor', 'borderColor'];

export function prepareEmbOutputWrapperMediaQueries(emberCSSProperties: any, theme: any): any{
    let breakPointName = '';
    let breakPointIndex = -1;
    let cssBreakPointContainer = '';
    let mediaQueries: any = {};

    const sizes = theme.sizes;

    for(let i = 0; i < sizes.length; i++){
        const size = sizes[i][0];
        const cssProps: any = {};
        breakPointName = sizes[i][1];
        breakPointIndex = i;

        if(i===0) cssBreakPointContainer = `@media(max-width: ${sizes[i][0]}px)`;
        else if(i === sizes.length-1) cssBreakPointContainer = `@media(min-width: ${sizes[i][0]}px)`;
        else if(i > 0) cssBreakPointContainer = `@media(min-width: ${sizes[i-1][0]}px), @media(max-width: ${sizes[i+1][0]}px)`;

        Object.keys(emberCSSProperties).map((propertyName)=>{

            const rawValue = emberCSSProperties[propertyName];
            let value = null;

            if(Array.isArray(rawValue)){
                if(rawValue[breakPointIndex]) value = rawValue[breakPointIndex];
            }else{
                value = rawValue;
            }

            if(propertyName === 'typography'){
                if(theme.typography[breakPointName][value]){
                    mediaQueries[cssBreakPointContainer] = {...mediaQueries[cssBreakPointContainer], ...theme.typography[breakPointName][value]};
                }
            }else if(colorProperties.includes(propertyName)){
                if(theme.colors[value]) value = theme.colors[value];
            }

            mediaQueries[cssBreakPointContainer][propertyName] = value;
        });
    }

    console.log('asdasdasdadads', mediaQueries);

    return mediaQueries;
}

export function prepareEmbOutput( emberCSSProperties: any, theme: any, wrapMediaQueries: boolean | undefined ): any{

    if(wrapMediaQueries) return prepareEmbOutputWrapperMediaQueries(emberCSSProperties, theme);

    const breakpointIndex = getCurrentBreakpointIndex(theme.sizes);
    const breakPointName = getCurrentBreakpoint(theme.sizes);

    let newProperties: any = {};

    Object.keys(emberCSSProperties).map((propertyName)=>{

        const rawValue = emberCSSProperties[propertyName];
        let value = null;

        if(Array.isArray(rawValue)){
            if(rawValue[breakpointIndex]) value = rawValue[breakpointIndex];
        }else{
            value = rawValue;
        }

        if(propertyName === 'typography'){
            if(theme.typography[breakPointName][value]){
                newProperties = {...newProperties, ...theme.typography[breakPointName][value]};
            }
        }else if(colorProperties.includes(propertyName)){
            if(theme.colors[value]) value = theme.colors[value];
        }

        newProperties[propertyName] = value;
    });

    return newProperties;
}

export interface TypographyCSSComponent{
    fontSize: string;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: string | number;
    letterSpacing?: string;
    lineHeight?: string;
    textDecoration?: string;
}
