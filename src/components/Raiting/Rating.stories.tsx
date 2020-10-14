import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Rating, RatingPropsType, RatingValueType} from './Raiting';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Rating',
    component: Rating
} as Meta;

export const EmptyStar: Story<RatingPropsType> = () => <Rating value={0} onClick={action("clicked")}/>;
export const Rating1: Story<RatingPropsType> = () => <Rating value={1} onClick={action("clicked")}/>;
export const Rating2: Story<RatingPropsType> = () => <Rating value={2} onClick={action("clicked")}/>;
export const Rating3: Story<RatingPropsType> = () => <Rating value={3} onClick={action("clicked")}/>;
export const Rating4: Story<RatingPropsType> = () => <Rating value={4} onClick={action("clicked")}/>;
export const Rating5: Story<RatingPropsType> = () => <Rating value={5} onClick={action("clicked")}/>;
export const ChangeRating = () => {
    const [star, setStar] = useState<RatingValueType>(5)
    return <Rating value={star} onClick={setStar}/>
};

