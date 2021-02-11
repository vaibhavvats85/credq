/* @flow */

import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, { ButtonProps, ButtonTheme, ButtonSize } from '.'


export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>{'Login'}</Button>;

export const Default = Template.bind({});
Default.args = {
  onClick: action('Clicked'),
}

export const Default_small = Template.bind({});
Default_small.args = {
  onClick: action('Clicked'),
  size: ButtonSize.SMALL
}
export const Default_medium = Template.bind({});
Default_medium.args = {
  onClick: action('Clicked'),
  size: ButtonSize.MEDIUM
}

export const Default_large = Template.bind({});
Default_large.args = {
  onClick: action('Clicked'),
  size: ButtonSize.LARGE
}

export const Rounded = Template.bind({});
Rounded.args = {
  onClick: action('Clicked'),
  theme: ButtonTheme.ROUNDED
}

export const Disabled = Template.bind({});
Disabled.args = {
  onClick: action('Clicked'),
  theme: ButtonTheme.ROUNDED,
  disabled: true
}
