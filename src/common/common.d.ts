import * as React from "react";
import {CSSProperties} from "react";

export interface UIComponentProps{
    className?: string;
    style?: CSSProperties;
    ref?: RefObject<T>;
}

export interface UIComponentStates{

}

export type EmberIcon = string | JSX.Element | (() => JSX.Element);
