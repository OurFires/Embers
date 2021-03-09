import type { Props } from "./index.d";
import React from "react";
import * as Icons from "../../icons";
import styled from "styled-components";

const SVGWrapper = styled.svg({
    fill: 'currentColor',
    verticalAlign: 'middle',
    flexShrink: 0, // prevent shrinking in flex-box,
    height: 24,
    width: 24
});

export const Icon: React.FC<Props> =
({
    children,
    viewBox,
    ariaHidden,
    ariaLabel,
    svgIcon = '',
    size = 'medium'
}) => {

    if(svgIcon){
        // @ts-ignore
        if(!Icons[svgIcon]){
            return null;
        }
        // @ts-ignore
        return React.createElement(Icons[svgIcon], {size, ariaLabel, ariaHidden})
    }

    return (
        <SVGWrapper
            viewBox={viewBox}
            aria-hidden={ariaHidden ? "true" : undefined}
            aria-label={ariaLabel}
            preserveAspectRatio="xMidYMid meet"
        >
            {children}
        </SVGWrapper>
    );
}
export default Icon;
