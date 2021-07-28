import {TypographyCSSComponent} from "../../libs/embers";

/**
 * This code was generated automatically.
 * 
 * DON'T EDIT THIS FILE
 * 
 * Changes to this file may cause incorrect behavior and will be lost if
 * the code is regenerated. 
 * 
 * @generated 7/28/2021, 5:33:08 PM
 * @generator embers-ds 0.1.0
 */
export enum TypographySizeType{
    's'='s',
    'm'='m',
    'l'='l',
}
export interface TypographyToken{
    s: TextStyleToken;
    m: TextStyleToken;
    l: TextStyleToken;
}
export interface TextStyleToken{
    titleHero: TypographyCSSComponent;
    titleBig: TypographyCSSComponent;
    title: TypographyCSSComponent;
    titleSmall: TypographyCSSComponent;
    big: TypographyCSSComponent;
    bigStrong: TypographyCSSComponent;
    body: TypographyCSSComponent;
    bodyStrong: TypographyCSSComponent;
    small: TypographyCSSComponent;
    smallStrong: TypographyCSSComponent;
    notes: TypographyCSSComponent;
    cta: TypographyCSSComponent;
    titleMaxi: TypographyCSSComponent;
    maxi: TypographyCSSComponent;
    extraSmall: TypographyCSSComponent;
    extraSmallList: TypographyCSSComponent;
    caption: TypographyCSSComponent;
}
export type TypographyType = string | 'titleHero' | 'titleBig' | 'title' | 'titleSmall' | 'big' | 'bigStrong' | 'body' | 'bodyStrong' | 'small' | 'smallStrong' | 'notes' | 'cta' | 'titleMaxi' | 'maxi' | 'extraSmall' | 'extraSmallList' | 'caption';
export interface ColorsToken{
    primary: string;
    primarylight: string;
    primarydark: string;
    secondary: string;
    secondarylight: string;
    secondarydark: string;
    ink: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    paper: string;
    error: string;
    errorink: string;
    warning: string;
    warningink: string;
    success: string;
    successink: string;
    info: string;
    infoink: string;
}
export type ColorType = string | 'primary' | 'primarylight' | 'primarydark' | 'secondary' | 'secondarylight' | 'secondarydark' | 'ink' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'paper' | 'error' | 'errorink' | 'warning' | 'warningink' | 'success' | 'successink' | 'info' | 'infoink';

export interface DesignToken{
    typography: TypographyToken;
    colors: ColorsToken;
    sizes: number[];
    spacing: number[];
    radius: number[];
}

