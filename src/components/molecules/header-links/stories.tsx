import { Meta, Story } from "@storybook/react";
import HeaderLinks from ".";

export default {
    title: 'HeaderLinks',
    component: HeaderLinks
} as Meta;



const Template: Story = (args) => <HeaderLinks {...args} />

export const Default = Template.bind({});
