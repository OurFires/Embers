import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Icon} from './index';
import type { Props } from "./index.d";
import * as Icons from "../../icons";
import {Card} from "../Card/index";

const iconObjects: any = Object.keys(Icons);
const defaultIcon = "Bookmark";

export default {
    title: 'Components/Icons/Icon',
    component: Icon,
    argTypes:{
        svgIcon:{
            control:{
                type: 'select',
                options: iconObjects
            },
        }
    }
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    svgIcon: defaultIcon
};

export const AllIcons = (props: any) => (
    <>
        {iconObjects.map((iconName: string, key: number)=>(
            <div key={key} style={{marginBottom:20,fontFamily:'Open Sans'}}>
                <Card>
                    <div style={{display:'flex'}}>
                        <div>
                            <Icon svgIcon={iconName} size="large" />
                        </div>
                        <div style={{padding:'0 20px'}}>
                            import '@design-system/icons/{iconName}'
                            <br />
                            {'<'+iconName+' />'}
                            <hr />
                            import '@design-system/components/Icon'
                            <br />
                            {'<Icon svgIcon="'+iconName+'" />'}
                        </div>
                    </div>
                </Card>
            </div>
        ))}
    </>
)
