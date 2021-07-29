
/**
 * This code was generated automatically.
 *
 * DON'T EDIT THIS FILE
 *
 * Changes to this file may cause incorrect behavior and will be lost if
 * the code is regenerated.
 *
 * @generated 7/28/2021, 5:10:49 PM
 * @generator embers 0.1.0
 */

import {CSSProperties} from 'react';
import * as iToken from './interfaces';
import * as CSS from 'csstype';
import {prepareEmbOutput} from '../../libs/embers'
import theme from './theme'

export interface DesignTokenCSSProperties extends Omit<CSSProperties, 'backgroundColor' | 'color' | 'borderColor' | 'borderLeftColor' | 'borderRightColor' | 'borderTopColor' | 'borderBottomColor' | 'paddingY' | 'paddingX' | 'marginY' | 'marginX'>{
    typography?: iToken.TypographyType | iToken.TypographyType[];
    backgroundColor?: iToken.ColorType | CSS.Property.BackgroundColor | (iToken.ColorType | CSS.Property.BackgroundColor)[];
    color?: iToken.ColorType | CSS.Property.Color | (iToken.ColorType | CSS.Property.Color)[];
    borderColor?: iToken.ColorType | CSS.Property.BorderColor | (iToken.ColorType | CSS.Property.BorderColor)[];
    borderLeftColor?: iToken.ColorType | CSS.Property.BorderColor | (iToken.ColorType | CSS.Property.BorderColor)[];
    borderRightColor?: iToken.ColorType | CSS.Property.BorderColor | (iToken.ColorType | CSS.Property.BorderColor)[];
    borderTopColor?: iToken.ColorType | CSS.Property.BorderColor | (iToken.ColorType | CSS.Property.BorderColor)[];
    borderBottomColor?: iToken.ColorType | CSS.Property.BorderColor | (iToken.ColorType | CSS.Property.BorderColor)[];
    paddingY?: number | string | (number | string)[];
    paddingX?: number | string | (number | string)[];
    marginY?: number | string | (number | string)[];
    marginX?: number | string | (number | string)[];
}

export type EmbersCSSProperties = DesignTokenCSSProperties | TemplateStringsArray | null | EmbersCSSProperties[] | {[key: string]: EmbersCSSProperties};

export function emb(cssProperties: EmbersCSSProperties, wrapMediaQueries?: boolean): TemplateStringsArray{
    return prepareEmbOutput(cssProperties, theme, wrapMediaQueries);
}

