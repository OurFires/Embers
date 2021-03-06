import {useEffect, useState} from "react";
import throttle from 'lodash.throttle';

const getDeviceConfig = (width: number) => {
    if(width < 320) {
        return 'xs';
    } else if(width >= 320 && width < 720 ) {
        return 'sm';
    } else if(width >= 720 && width < 1024) {
        return 'md';
    } else if(width >= 1024) {
        return 'lg';
    }
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

export const EmbersThemeProvider : React.FunctionComponent = (props) => {
    const point = useBreakpoint();
    return (
        <>
            <div>{point} {new Date().getSeconds()}</div>
            {props.children}
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
