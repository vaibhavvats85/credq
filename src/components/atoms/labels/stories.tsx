import { Meta, Story } from "@storybook/react";
import Label, { LabelProps } from ".";

export default {
    title: 'Label',
    component: Label
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args}>{'Demo label'}</Label>

export const Default = Template.bind({});
Default.args = {
    size: 'large',
    isLink: true
}