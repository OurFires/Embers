import React from 'react';
import {DesignTokenCSSProperties, emb} from "../tokens/embers-last/index";
import styled, {ThemedStyledFunction} from "styled-components";

interface VariantThemedStyledFunctions { [key: string]: any };

const embVariants = (
    t: ThemedStyledFunction<any, any>,
    globalProperties: DesignTokenCSSProperties,
    cssProperties: { [key: string]: DesignTokenCSSProperties; }
    ): VariantThemedStyledFunctions =>
{
    const s: VariantThemedStyledFunctions = {};
    for(const m in cssProperties){
        s[m] = t(emb({...globalProperties, ...cssProperties[m]}, true) as any);
    }

    return s;
}

interface Props {
    variant?: 'primary' | 'secondary' | 'a' | 'b' | 'c';
}

const variants = embVariants(
    styled.button, {
        typography: ['titleHero', 'smallStrong', 'small', 'smallStrong'],
        backgroundColor: ['primary', 'secondary', 'yellow', 'teal'],
        color: ['secondary', 'primary'],
    },{
    primary: {
        padding: 50,
        backgroundColor: ['secondary', 'primary', 'yellow', 'teal']
    },
    b: {
        padding: 150
    },
    c: {
        padding: 200
    }
});

const Button: React.FC<Props> = (
    {variant = 'primary'}
    ) => {

    const StyledButton = variants[variant];

  return (
    <>
        <StyledButton>Hello world</StyledButton>
    </>
  );
 }

export default Button;
