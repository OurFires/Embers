const fs = require('fs');
const packageInfo = require('../package.json')

const tokensFolder = '../src/tokens/';
const tokenName = 'embers-last';
const newTokenFolder = tokensFolder + tokenName + '/';
const rawdata = fs.readFileSync(tokensFolder + 'embers-last.json');
const token = JSON.parse(rawdata);
const JS_EOL = '\n';

const interfacesFilePath = newTokenFolder + 'interfaces.ts';
const indexFilePath = newTokenFolder + 'index.ts';

const breakpoints = {};
const typography = {};
const typographyNames = [];

const replaceCSSProperties = {
    backgroundColor: ['iToken.ColorType', 'CSS.Property.BackgroundColor'],
    color: ['iToken.ColorType', 'CSS.Property.Color'],
    borderColor: ['iToken.ColorType', 'CSS.Property.BorderColor'],
    borderLeftColor: ['iToken.ColorType', 'CSS.Property.BorderColor'],
    borderRightColor: ['iToken.ColorType', 'CSS.Property.BorderColor'],
    borderTopColor: ['iToken.ColorType', 'CSS.Property.BorderColor'],
    borderBottomColor: ['iToken.ColorType', 'CSS.Property.BorderColor'],
}

let TypographySizeTypeContent = '';
let TypographyTokenContent = '';
let TextStyleTokenContent = '';
let ColorsTokenContent = '';
let ColorTypeContent = '';
let TypographyTypeContent = '';
const DesignTokenInterfaceContent = `
export interface DesignToken{
    typography: TypographyToken;
    colors: ColorsToken;
    sizes: number[];
    spacing: number[];
}
`
const AutoGenerateHeader = `
/**
 * This code was generated automatically.
 * 
 * DON'T EDIT THIS FILE
 * 
 * Changes to this file may cause incorrect behavior and will be lost if
 * the code is regenerated. 
 * 
 * @generated ${new Date().toLocaleDateString('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})}
 * @generator ${packageInfo.name} ${packageInfo.version}
 */`;

String.prototype.toCamelCase = function() {
    return this.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
};

function convertUnitSize( unit ){
    switch(unit){
        default:
            return 'px';
    }
}

if (!fs.existsSync(newTokenFolder)){
    fs.mkdirSync(newTokenFolder);
}

// Build breakpoints
TypographySizeTypeContent += 'export enum TypographySizeType{\n';
TypographyTokenContent += 'export interface TypographyToken{\n';
for(const breakPointName in token.sizes){
    breakpoints[breakPointName] = Number(token.sizes[breakPointName].value);
    TypographySizeTypeContent += `    '${breakPointName}'='${breakPointName}',\n`;
    TypographyTokenContent += `    ${breakPointName}: TextStyleToken;\n`;
}
TypographySizeTypeContent += '}';
TypographyTokenContent += '}';

// Build Colors
ColorsTokenContent += 'export interface ColorsToken{\n';
ColorTypeContent += 'export type ColorType = string';
for(const colorName in token.color){
    ColorsTokenContent += `    ${colorName}: string;\n`;
    ColorTypeContent += ` | '${colorName}'`;
}
ColorsTokenContent += '}';
ColorTypeContent += ';';

Object.keys(breakpoints).map((sizeName)=>{
    typography[sizeName] = {};
    for (const _typoSize in token[sizeName]) {
        const replaceExp = new RegExp(`^${sizeName} `);
        const typoSize = _typoSize.replace(replaceExp, '').toCamelCase();
        const typo = token[sizeName][_typoSize];
        if(typo.category==='font'){
            typography[sizeName][typoSize] = {};
            if(!typographyNames.includes(typoSize)) typographyNames.push(typoSize);
            for(const typoPropertyName in typo){
                if(typoPropertyName!=='category'){
                    // @ts-ignore
                    const typoProperty = typo[typoPropertyName];
                    if(typoProperty.unit)
                        typography[sizeName][typoSize][typoPropertyName] = `${typoProperty.value}${convertUnitSize(typoProperty.unit)}`;
                    else
                        typography[sizeName][typoSize][typoPropertyName] = typoProperty.value;
                }
            }
        }
    }
});

TextStyleTokenContent += 'export interface TextStyleToken{\n';
TypographyTypeContent += 'export type TypographyType = string';
typographyNames.map((typographyName)=>{
    TextStyleTokenContent += `    ${typographyName}: TypographyCSSComponent;\n`;
    TypographyTypeContent += ` | '${typographyName}'`;
})
TextStyleTokenContent += '}';
TypographyTypeContent += ';';

fs.unlink(interfacesFilePath, ()=>{
    fs.writeFile(interfacesFilePath, '' +
        'import {TypographyCSSComponent} from "../../libs/embers";' + JS_EOL +
        AutoGenerateHeader + JS_EOL +
        TypographySizeTypeContent + JS_EOL +
        TypographyTokenContent + JS_EOL +
        TextStyleTokenContent + JS_EOL +
        TypographyTypeContent + JS_EOL +
        ColorsTokenContent + JS_EOL +
        ColorTypeContent + JS_EOL +
        DesignTokenInterfaceContent + JS_EOL,
        function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Interfaces file saved!");
    });
});
fs.unlink(indexFilePath, ()=>{
    fs.writeFile(
        indexFilePath,
        AutoGenerateHeader + JS_EOL + `
import {CSSProperties} from 'react';
import * as iToken from './interfaces';
import * as CSS from 'csstype';
import {prepareEmbOutput} from '../../libs/embers'

export interface DesignTokenCSSProperties extends Omit<CSSProperties, ${Object.keys(replaceCSSProperties).map(propertyName=>`'${propertyName}'`).join(' | ')}>{
    typography?: iToken.TypographyType | iToken.TypographyType[];
${Object.keys(replaceCSSProperties).map((propertyName)=>(
`    ${propertyName}?: ${replaceCSSProperties[propertyName].join(' | ')} | (${replaceCSSProperties[propertyName].join(' | ')})[];`
)).join('\n')}
}
export function emb(cssProperties: DesignTokenCSSProperties): CSSProperties{
    return prepareEmbOutput(cssProperties);
}
        `,
        (err) => {
            if(err) {
                return console.log(err);
            }
            console.log("Index file saved!");
        }
    );
});

/*typographySizeTypes.map((sizeName)=>{
    typography[sizeName] = {};
    for (const typoSize in token[sizeName]) {
        const typo = token[sizeName][typoSize];
        if(typo.category==='font'){
            typography[sizeName][typoSize] = {};
            for(const typoPropertyName in typo){
                if(typoPropertyName!=='category'){
                    // @ts-ignore
                    const typoProperty = typo[typoPropertyName];
                    if(typoProperty.unit)
                        typography[sizeName][typoSize][typoPropertyName] = `${typoProperty.value}${convertUnitSize(typoProperty.unit)}`;
                    else
                        typography[sizeName][typoSize][typoPropertyName] = typoProperty.value;
                }
            }
        }
    }
})*/
