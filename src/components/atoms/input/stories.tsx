import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import Input, { Inputprops } from ".";

export default {
    title: 'Input',
    component: Input
} as Meta;

const Template: Story<Inputprops> = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
    label: 'First Name',
    onChange: () => action('Demo Input'),
    placeholder: 'First Name',
    type: 'text'
}