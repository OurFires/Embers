import {PropsWithChildren, useContext, useEffect, useState} from "react";
import throttle from 'lodash.throttle';
import createThemeProvider, {ThemeProviderType} from "./createThemeProvider";
import * as React from "react";
import {EmberIcon} from "../common/common";
import Icon from "../components/Icon/index";

const radiiProperties = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'];
const spacingProperties = ['padding', 'paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
const colorProperties = ['color', 'background', 'backgroundColor', 'border', 'borderColor', 'backgroundImage'];

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

        mediaQueries[cssBreakPointContainer] = generateCSSProperties(emberCSSProperties, theme, breakPointIndex, breakPointName)
    }

    return mediaQueries;
}

export function generateCSSProperties(emberCSSProperties: any, theme: any, breakpointIndex: number, breakPointName: string){
    const deepMap = ( obj: any ) => {
        let newObj: any = {};

        Object.keys(obj).map((propertyName)=>{
            const rawValue = obj[propertyName];
            let value: string | number | [] | null = null;

            if(Array.isArray(rawValue)) {
                if (rawValue[breakpointIndex]) value = rawValue[breakpointIndex];
            }else if(typeof rawValue === 'object'){
                newObj[propertyName] = deepMap(rawValue);
            }else{
                value = rawValue;
            }

            if(value!==undefined&&value!==null){
                if(propertyName === 'typography'){
                    if(theme.typography[breakPointName][value as string]){
                        newObj = {...newObj, ...theme.typography[breakPointName][value as string]};
                    }
                }else if(propertyName === 'paddingX'){
                    newObj = {...newObj, ...{paddingLeft: theme.spacing[value as number], paddingRight: theme.spacing[value as number]}};
                }else if(propertyName === 'paddingY'){
                    newObj = {...newObj, ...{paddingTop: theme.spacing[value as number], paddingBottom: theme.spacing[value as number]}};
                }else if(propertyName === 'marginX'){
                    newObj = {...newObj, ...{marginLeft: theme.spacing[value as number], marginRight: theme.spacing[value as number]}};
                }else if(propertyName === 'marginY'){
                    newObj = {...newObj, ...{marginTop: theme.spacing[value as number], marginBottom: theme.spacing[value as number]}};
                }else if(radiiProperties.includes(propertyName)){
                    value = theme.radius[value as number];
                }else if(spacingProperties.includes(propertyName)){
                    value = theme.spacing[value as number];
                }else if(colorProperties.includes(propertyName)){
                    if(theme.colors[value as string]) value = theme.colors[value as string];
                    else Object.keys(theme.colors).map((colorName)=>{ value = String(value).replace(colorName, theme.colors[colorName]) })
                }

                newObj[propertyName] = value;
            }
        });

        return newObj;
    }

    return deepMap(emberCSSProperties);
}

export function prepareEmbOutput( emberCSSProperties: any, theme: any, wrapMediaQueries: boolean | undefined ): any{

    if(wrapMediaQueries!==false) return prepareEmbOutputWrapperMediaQueries(emberCSSProperties, theme);

    const breakpointIndex = getCurrentBreakpointIndex(theme.sizes);
    const breakPointName = getCurrentBreakpoint(theme.sizes);

    const newProperties = generateCSSProperties(emberCSSProperties, theme, breakpointIndex, breakPointName);

    console.log('properties', newProperties);

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

export const buildClassNames = ( classes: {[key: string]: boolean | string | undefined | null} ) => {
    let classNames = '';
    Object.keys(classes).map((cName: string) => {
        if(classes[cName]===true) classNames += cName + ' ';
        else if(typeof classes[cName] == 'string') classNames += classes[cName] + ' ';
    })

    return classNames;
}

export const embIcon = ( icon: EmberIcon ): any => {
    if(icon){
        if(typeof icon === 'string'){
            return <Icon svgIcon={icon} />;
        }else{
            // @ts-ignore
            return icon();
        }
    }

    return <></>;
}
