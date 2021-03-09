import * as React from "react";
import Icon from './index'
import {BuildIcon} from './buildIcon.d'

const buildIcon: BuildIcon = (def, viewBox, displayName) => {
    // @ts-ignore
    const icon = props => (
        <Icon viewBox={viewBox} {...props}>
            {def}
        </Icon>
    );

    icon.displayName = displayName;

    return icon;
}

export default buildIcon;
