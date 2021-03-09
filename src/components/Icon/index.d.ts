import * as React from "react";
import * as Common from "../../common/common";

declare module '@embers/components/Icon';

export interface Props extends Common.UIComponentProps {
    viewBox?: string;
    ariaLabel?: string;
    ariaHidden?: boolean;
    size?: 'small' | 'medium' | 'large' | 'extraLarge' | 'extraLarge2';
    svgIcon?: string;
}

declare const Icon: React.FC<Props>;
export { Icon, Icon as default };
