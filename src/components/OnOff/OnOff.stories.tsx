import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {OnOff, OnOffType,} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/OnOff',
    component: OnOff
} as Meta;

export const on: Story<OnOffType> = () => <OnOff OnOff={true} onClick={action("clicked")}/>;
export const off: Story<OnOffType> = () => <OnOff OnOff={false} onClick={action("clicked")}/>;
// export const onOff: Story<OnOffType> = () => {
//     const [value, setValue] = useState<boolean>(false)
//     return <OnOff OnOff={value} onClick={setValue}/>
// };

