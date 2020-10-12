import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {UncontrolledRating, RatingPropsType, RatingValueType} from './UncontrolRaiting';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/UncontrolledRating',
    component: UncontrolledRating
} as Meta;

export const EmptyStar: Story<RatingPropsType> = () => <UncontrolledRating value={0} onClick={action("clicked")}/>;
export const Rating1: Story<RatingPropsType> = () => <UncontrolledRating value={1} onClick={action("clicked")}/>;
export const Rating2: Story<RatingPropsType> = () => <UncontrolledRating value={2} onClick={action("clicked")}/>;
export const Rating3: Story<RatingPropsType> = () => <UncontrolledRating value={3} onClick={action("clicked")}/>;
export const Rating4: Story<RatingPropsType> = () => <UncontrolledRating value={4} onClick={action("clicked")}/>;
export const Rating5: Story<RatingPropsType> = () => <UncontrolledRating value={5} onClick={action("clicked")}/>;
export const ChangeRating = () => {
    const [star, setStar] = useState<RatingValueType>(5)
    return <UncontrolledRating value={star} onClick={setStar}/>
};

