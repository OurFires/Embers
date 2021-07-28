import React from 'react';
import styled from "styled-components";
import {emb} from '../../theme';
import {Props} from './index.d'
import {buildClassNames, embIcon} from "../../libs/embers";

const TextAreaWrapper = styled.textarea(emb({
    typography: 'small',
    borderRadius: 0,
    border: '1px solid transparent',
    color: 'black',
    paddingY: 3,
    paddingX: 4,
    margin:1,
    outline: 'none',
    '&.primary': {
        backgroundColor: 'primary',
        '&:hover:not(.disabled)':{
            backgroundColor: 'primarylight'
        },
        '&:active:not(.disabled)':{
            backgroundColor: 'primarydark'
        }
    },
    '&.secondary':{
        backgroundColor: 'gray2',
        '&:hover:not(.disabled)':{
            backgroundColor: 'secondary'
        },
        '&:active:not(.disabled)':{
            backgroundColor: 'secondarydark'
        }
    },
    '&.outline':{
        backgroundColor: 'transparent',
        color: 'gray3',
        borderColor: 'ink',
        '&:hover:not(.disabled)':{
            color: 'primary',
            borderColor: 'primary'
        },
        '&:active:not(.disabled)':{
            borderColor: 'primarydark',
            color: 'primarydark'
        },
        '&.disabled':{
            backgroundColor: 'transparent',
            color: 'gray3'
        }
    },
    '&.text-only':{
        backgroundColor: 'transparent',
        color: 'gray1',
        '&:hover:not(.disabled)':{
            color: 'primary',
        },
        '&:active:not(.disabled)':{
            color: 'primarydark',
        },
        '&.disabled':{
            backgroundColor: 'transparent',
            color: 'gray3'
        }
    },
    '&.disabled':{
        backgroundColor: 'gray5'
    },
    '&.fullWidth':{
        width: '100%'
    }
}));

const TextArea:React.FC<Props> =
({
    variant = 'primary',
     disabled= false,
     children,
     fullWidth,
     icon,
     iconRight
}) =>
{
    const classNames = buildClassNames({variant, disabled, fullWidth});
    return (
        <TextAreaWrapper /* className={classNames} */ disabled={false}>
            {/* {icon && <span className="icon-left">{embIcon(icon)}</span> }
            <span className="label">
                {children}
            </span>
            {iconRight && <span className="icon-left">{embIcon(iconRight)}</span> } */}
        </TextAreaWrapper>
    );
}

export default TextArea;
