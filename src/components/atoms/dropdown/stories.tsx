import { Meta, Story } from "@storybook/react";
import Dropdown, { Dropdownprops } from ".";

export default {
    title: 'Dropdown',
    component: Dropdown
} as Meta;

const Template: Story<Dropdownprops> = (args) => <Dropdown {...args} />

export const Default = Template.bind({});
Default.args = {
    label: 'First Name',
}